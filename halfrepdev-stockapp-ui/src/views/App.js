import React from 'react';
import {Provider} from "react-redux";
import store from "../redux/store";
import {CardColumns, Container} from "reactstrap";
import CustomNavBar from "../components/CustomNavBar";
import StockCard from "../components/StockCard";


const App = () =>
    <>
      <CustomNavBar/>
        <Container>
            {/*Remove Hard Coded Cards*/}
            <CardColumns>
                <StockCard/>
                <StockCard/>
                <StockCard/>
                <StockCard/>
                <StockCard/>
                <StockCard/>
                <StockCard/>
                <StockCard/>
                <StockCard/>
                <StockCard/>
                <StockCard/>
            </CardColumns>
        </Container>
    </>;
export default App;
