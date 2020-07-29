import React from 'react';
import {Card, CardBody} from "reactstrap";
import Radar from 'react-d3-radar';
import CardHeader from "reactstrap/es/CardHeader";
import CardFooter from "reactstrap/es/CardFooter";
import {Button} from "react-bootstrap";
const StockCard = () => {

    return<Card style={{backgroundColor: '#434A4f'}}>
        <CardHeader>
            <h4 style={{color: '#7E638C'}}> Apple</h4>
        </CardHeader>
        <CardBody style={{backgroundColor: '#434A4f'}}>
            <Radar
                width={250}
                height={250}
                padding={30}
                domainMax={10}
                highlighted={null}
                onHover={(point) => {
                    if (point) {
                        console.log('hovered over a data point');
                    } else {
                        console.log('not over anything');
                    }
                }}
                data={{
                    variables: [
                        {key: 'value', label: 'Value'},
                        {key: 'dividend', label: 'Dividend'},
                        {key: 'health', label: 'Health'},
                        {key: 'past', label: 'Past'},
                        {key: 'future', label: 'Future'},
                    ],
                    sets: [
                        {
                            key: 'me',
                            label: 'My Scores',
                            values: {
                                value: 4,
                                dividend: 10,
                                health: 7,
                                past: 10,
                                future: 8,
                            },
                        },
                    ],
                }}
            />
        </CardBody>
        <CardFooter style={{height:'150px'}}>
            <div style={{columnCount: 4, width:'350px'}}>
                <li className={"listStyle"}>Open</li>
                <li className={"listStyle"}>High</li>
                <li className={"listStyle"}>Low</li>
                <li className={"listStyle"}>52Wk High</li>
                <li className={"listStyle"}>52Wk Low</li>

                <li className={"listStyle"}>380.90</li>
                <li className={"listStyle"}>383.88</li>
                <li className={"listStyle"}>378.83</li>
                <li className={"listStyle"}>393.91</li>
                <li className={"listStyle"}>192.58</li>

                <li className={"listStyle"}>Volume</li>
                <li className={"listStyle"}>Avg Vol</li>
                <li className={"listStyle"}>Mkt Cap</li>
                <li className={"listStyle"}>P/E Ratio</li>
                <li className={"listStyle"}>Div/Yield</li>

                <li className={"listStyle"}>22.56M</li>
                <li className={"listStyle"}>37.62M</li>
                <li className={"listStyle"}>1.66T</li>
                <li className={"listStyle"}>29.90</li>
                <li className={"listStyle"}>.82</li>

            </div>
        </CardFooter>
    </Card>
};

export default StockCard;

