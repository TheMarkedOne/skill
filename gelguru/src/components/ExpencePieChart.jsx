import React, { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Label } from "recharts";
import Icon6 from "../assets/utilities.png";
import Icon7 from "../assets/shopping.png";
import Icon8 from "../assets/transport.png";
import Icon9 from "../assets/cafe.png";
import Icon10 from "../assets/health.png"
import Icon5 from "../assets/other.png";
import { useAuth } from "../context/useAuth";
import { useexpenceEntry } from "../hooks/useExpence";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/react";

function ExpencePieChart({ filteredExpenceData, expenceBalance }) {
    const [utilities, setUtilities] = useState(0);
    const [health, setHealth] = useState(0);
    const [transportation, setTransportation] = useState(0);
    const [cafe, setCafe] = useState(0);
    const [groceries, setGroceries] = useState(0);
    const [other, setOther] = useState(0);

    const { expence, isExpencePending } = useexpenceEntry()
    const { user } = useAuth()


    console.log(filteredExpenceData, expenceBalance)

    const expenceData = [
        { name: 'Utilities', value: utilities ? utilities : 0, icon: Icon6 },
        { name: 'Groceries/shopping', value: groceries ? groceries : 0, icon: Icon7 },
        { name: 'Cafe/Restaurant', value: cafe ? cafe : 0, icon: Icon8 },
        { name: 'Transportation', value: transportation ? transportation : 0, icon: Icon9 },
        { name: 'Health', value: health ? health : 0, icon: Icon10 },
        { name: 'Other', value: other ? other : 0, icon: Icon5 },
    ];



    const expensesDataMap = new Map();

    filteredExpenceData.forEach(item => {
        expenceData.forEach(category => {
            const categoryName = category.name;
            const categoryState = category.state;
            const categoryIcon = category.icon;

            const existingEntry = expensesDataMap.get(categoryName);

            if (existingEntry) {
                expensesDataMap.set(categoryName, {
                    name: categoryName,
                    value: existingEntry.value + (parseFloat(item[categoryState]) || 0),
                    icon: categoryIcon,
                });
            } else {
                expensesDataMap.set(categoryName, {
                    name: categoryName,
                    value: parseFloat(item[categoryState]) || 0,
                    icon: categoryIcon,
                });
            }
        });
    });

    const expensesData = Array.from(expensesDataMap.values());

    console.log(expensesData)
    console.log(expenceData)


    const handleChange = (e) => {
        e.preventDefault();
        const expenceData = {
            user: user.id,
            utilities: utilities !== 0 ? parseFloat(utilities) : null,
            groceries_shopping: groceries !== 0 ? parseFloat(groceries) : null,
            health: health !== 0 ? parseFloat(health) : null,
            cafe_restaurant: cafe !== 0 ? parseFloat(cafe) : null,
            transportation: transportation !== 0 ? parseFloat(transportation) : null,
            other: other !== 0 ? parseFloat(other) : null,
        };
        expence(expenceData)
    };


    // const checkIsEmpty = expenceData && expenceData?.some(item => item.value > 0);
    // console.log(checkIsEmpty)

    const dataOfExpence = expensesData.find(item => item.groceries_shopping > 0 || item.utilities > 0) ? expensesData : expenceData

    console.log(dataOfExpence)
    return (
        <div className="max-w-[1920px] w-full flex items-center justify-center gap-8">
            <ResponsiveContainer width={325} height={310}>
                <PieChart width={325} height={310}>
                    <Pie
                        data={dataOfExpence}
                        dataKey="value"
                        cx="50%"
                        cy="50%"
                        innerRadius={80}
                        outerRadius={160}
                        fill="#29B66A"
                    >
                        <Cell fill="#29B66A" />
                        <Cell fill="#66d306" />
                        <Cell fill="#D45050" />
                        <Cell fill="#C1BCFF" />
                        <Cell fill="#6848BE" />
                        <Cell fill="#B3B3B3" />
                        <Label
                            value={`Total: ${expenceBalance ? expenceBalance : 0} GEL`}
                            position="center"
                            fill="#333"
                            fontSize={16}
                        />
                    </Pie>
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>

            <form onSubmit={handleChange} className="flex flex-col gap-4">
                {expenceData.map((item, index) => (
                    <div key={index} className="flex items-center gap-12">
                        <div className="flex items-center gap-4">
                            <img src={item.icon} alt={`${item.name} icon`} className="w-8 h-8" />
                            <label
                                htmlFor={`income-${index}`}
                                className="text-base font-semibold w-44 text-start"
                            >
                                {item.name}
                            </label>
                        </div>
                        <Input
                            id={`income-${index}`}
                            type="string"
                            placeholder="0.00"
                            labelPlacement="outside"
                            size='lg'
                            variant="bordered"
                            startContent={
                                <div className="pointer-events-none flex items-center">
                                    <span className="text-default-400 text-small">GEL</span>
                                </div>
                            }
                            value={item.value || ""}
                            onChange={(e) => {
                                const newValue = parseFloat(e.target.value) || 0;
                                switch (index) {
                                    case 0:
                                        setUtilities(newValue);
                                        break;
                                    case 1:
                                        setGroceries(newValue);
                                        break;
                                    case 2:
                                        setCafe(newValue);
                                        break;
                                    case 3:
                                        setTransportation(newValue);
                                        break;
                                    case 4:
                                        setHealth(newValue);
                                        break;
                                    case 5:
                                        setOther(newValue);
                                        break;
                                    default:
                                        break;
                                }
                            }}
                        />
                    </div>
                ))}

                <div className="flex items-center justify-end gap-8">
                    <Button disabled={isExpencePending}
                        size="lg"
                        type="submit" variant='shadow' color='success' className="text-stone-100">{isExpencePending ? 'Saving' : 'Save'}
                    </Button>

                    <Button type="button"
                        size="lg"
                        disabled={isExpencePending}
                        onClick={() => {
                            setUtilities(0);
                            setHealth(0);
                            setTransportation(0);
                            setCafe(0);
                            setGroceries(0);
                            setOther(0)
                        }} variant='shadow' color='danger' className="text-stone-100">
                        Delete
                    </Button>
                </div>
            </form>
        </div>
    );
}



export default ExpencePieChart;
