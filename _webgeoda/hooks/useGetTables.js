import { useSelector } from "react-redux"

import {
    findTable
} from '../utils/summarize';

import {
    find
} from '../utils/data';
import useFetchData from "./useFetchData";
import { useState, useEffect } from "react";

export default function useGetTables({
    dataset=false,
    variable=false,
    geoids=[],
    getDates=false
}){
    const currentData = useSelector((state) => state.currentData);
    const storedData = useSelector((state) => state.storedData);
    const storedGeojson = useSelector((state) => state.storedGeojson);
    const dataPresets = useSelector((state) => state.dataPresets)
    const fetchData = useFetchData();
    const [tables, setTables] = useState({
        numerator: {},
        denominator: {},
        dates: []
    })

    const getTables = async (
        dataset=false,
        variable=false,
        geoids=[]
    ) => {
        if (variable === false) return;
        const variableSpec = find(
                dataPresets.variables,
                (o) => o.variable === variable
            )
        
        if (variableSpec === undefined){
            console.log('Missing Variable')
            setTables({
                numerator: {},
                denominator: {},
                dates: []
            })
            return;
        }
        const numeratorTable = findTable(
            dataset,
            variableSpec.numerator,            
            dataPresets.data
        )
        
        const denominatorTable = findTable(
            dataset,
            variableSpec.denominator,
            dataPresets.data,
        )

        const numeratorData = variableSpec && variableSpec.numerator === 'properties' 
            ? dataset in storedGeojson
                ? storedGeojson[dataset].properties
                : await fetchData({ req:dataset })
            : numeratorTable && numeratorTable.file in storedData
                ? storedData[numeratorTable.file]
                : await fetchData({ req:numeratorTable })

        const denominatorData = variableSpec && variableSpec.denominator === 'properties' 
            ? dataset in storedGeojson
                ? storedGeojson[dataset].properties
                : await fetchData({ req:dataset })
            : denominatorTable && denominatorTable.file in storedData
                ? storedData[denominatorTable.file]
                : await fetchData({ req:denominatorTable })     
        
        if (geoids.length){
            let numeratorData = 'data' in numeratorData ? numeratorData.data : numeratorData;
            let denominatorData = 'data' in denominatorData ? denominatorData.data : denominatorData;
            let tempNumer = {};
            let tempDenom = {};

            if (denominatorData) {
                for (let i=0; i<geoids.length;i++){
                    tempNumer[geoids[i]] = numeratorData[geoids[i]]
                    tempDenom[geoids[i]] = denominatorData[geoids[i]]
                }
            } else {
                for (let i=0; i<geoids.length;i++){
                    tempNumer[geoids[i]] = numeratorData[geoids[i]]
                }
            }

            setTables({
                numerator: 'data' in numeratorData ? numeratorData.data : numeratorData,
                denominator: 'data' in denominatorData ? denominatorData.data : denominatorData,
                dates: numeratorData?.dateIndices || denominatorData.dateIndices || []
            })
        }
        
        setTables({
            numerator: 'data' in numeratorData ? numeratorData.data : numeratorData,
            denominator: 'data' in denominatorData ? denominatorData.data : denominatorData,
            dates: numeratorData?.dateIndices || denominatorData?.dateIndices || []
        })
    }

    useEffect(() => {
        getTables(
            dataset||currentData, 
            variable, 
            geoids
        )
    },[dataset, variable, geoids.length])

    return tables
}