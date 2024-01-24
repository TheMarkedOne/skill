import React, { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Label } from "recharts";
import Icon1 from "../assets/salary.png";
import Icon2 from "../assets/income.png";
import Icon3 from "../assets/rent.png";
import Icon4 from "../assets/remmitance.png";
import Icon5 from "../assets/other.png";
import { useFinancialEntry } from "../hooks/useFinancialEntry";
import { useAuth } from "../context/useAuth";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/react";

function IncomePieChart({ income, data }) {
    const [salary, setSalary] = useState(0);
    const [dividend, setDividend] = useState(0);
    const [rentIncome, setRentIncome] = useState(0);
    const [remittances, setRemittances] = useState(0);
    const [other, setOther] = useState(0);
    const { mutate, isPending } = useFinancialEntry()
    const { user } = useAuth()

    const incomeData = [
        { name: 'Salary', value: salary ? salary : 0, icon: Icon1 },
        { name: 'Dividend', value: dividend ? dividend : 0, icon: Icon2 },
        { name: 'Rent Income', value: rentIncome ? rentIncome : 0, icon: Icon3 },
        { name: 'Remittances', value: remittances ? remittances : 0, icon: Icon4 },
        { name: 'Other', value: other ? other : 0, icon: Icon5 },
    ];

    let pieData;

    if (data) {
        pieData = [
            { name: 'Salary', value: salary ? salary : 1, icon: Icon1 },
            { name: 'Dividend', value: dividend ? dividend : 1, icon: Icon2 },
            { name: 'Rent Income', value: rentIncome ? rentIncome : 1, icon: Icon3 },
            { name: 'Remittances', value: remittances ? remittances : 1, icon: Icon4 },
            { name: 'Other', value: other ? other : 1, icon: Icon5 },
        ]
    } else {
        pieData = incomeData
    }

    const totalIncome = incomeData.reduce((accum, cur) => accum + cur.value, 0);

    const handleChange = (e) => {
        e.preventDefault();


        const incomeData = {
            user: user.id,
            salary: salary !== 0 ? parseFloat(salary) : null,
            business_income: dividend !== 0 ? parseFloat(dividend) : null,
            rent_income: rentIncome !== 0 ? parseFloat(rentIncome) : null,
            remittances: remittances !== 0 ? parseFloat(remittances) : null,
            other: other !== 0 ? parseFloat(other) : null,
        };

        console.log(incomeData);
        mutate(incomeData)
    };

    const checkIsEmpty = incomeData?.some(item => item.value > 0);

    return (
        <div className="max-w-[1920px] w-full flex items-center justify-center gap-8">
            {!checkIsEmpty ? <div className="w-[300px] h-[300px] rounded-full bg-gray-300"></div> :
                <ResponsiveContainer width={325} height={310}>
                    <PieChart>
                        <Pie
                            data={incomeData}
                            dataKey="value"
                            cx="50%"
                            cy="50%"
                            innerRadius={80}
                            outerRadius={160}
                            fill="#29B66A"
                        >
                            <Cell fill="#29B66A" />
                            <Cell fill="#D45050" />
                            <Cell fill="#C1BCFF" />
                            <Cell fill="#6848BE" />
                            <Cell fill="#B3B3B3" />
                            <br />
                            <Label
                                value={`Total: ${totalIncome ? totalIncome : 0} GEL`}
                                position="center"
                                fill="#333"
                                fontSize={16}
                            />
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>}



            <form onSubmit={handleChange} className="flex flex-col gap-4">
                {incomeData.map((item, index) => (
                    <div key={index} className="flex items-center gap-12">
                        <div className="flex items-center gap-4">
                            <img src={item.icon} alt={`${item.name} icon`} className="w-8 h-8" />
                            <label
                                htmlFor={`income-${index}`}
                                className="text-lg font-semibold w-36 text-start"
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
                            value={item.value || ""}
                            startContent={
                                <div className="pointer-events-none flex items-center">
                                    <span className="text-default-400 text-small">GEL</span>
                                </div>
                            }
                            onChange={(e) => {
                                const newValue = parseFloat(e.target.value) || 0;
                                switch (index) {
                                    case 0:
                                        setSalary(newValue);
                                        break;
                                    case 1:
                                        setDividend(newValue);
                                        break;
                                    case 2:
                                        setRentIncome(newValue);
                                        break;
                                    case 3:
                                        setRemittances(newValue);
                                        break;
                                    case 4:
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

                    <Button disabled={isPending} size="lg"
                        type="submit" variant='shadow' color='success' className="text-stone-100">{isPending ? 'Saving' : 'Save'}
                    </Button>

                    <Button type="button"
                        size="lg"
                        disabled={isPending}
                        onClick={() => {
                            setSalary(0);
                            setDividend(0);
                            setRentIncome(0);
                            setRemittances(0);
                            setOther(0);
                        }} variant='shadow' color='danger' className="text-stone-100">
                        Delete
                    </Button>

                </div>
            </form>
        </div>
    );
}

export default IncomePieChart;
