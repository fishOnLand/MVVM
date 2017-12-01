import React from "react";
import {Provider} from "react-redux";
import store from "../redux/store";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from "react-router-dom";
import App from "../components/App";
import Home from "../components/Home";
import Product from "../components/Product";
import Cart from "../components/Cart";
import All from "../components/Product/All";
import Consert from "../components/Product/Consert";
import Opera from "../components/Product/Opera";
import Playing from "../components/Product/Playing";
import Detail from "../components/Detail";

const router = (
    <Provider store={store}>
        <Router>
            <App>
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/product" render={()=>
                        <Product>
                            <Switch>
                                <Route path="/product/all" component={All} />
                                <Route path="/product/consert" component={Consert} />
                                <Route path="/product/opera" component={Opera} />
                                <Route path="/product/playing" component={Playing} />
                                <Redirect from="/product" to="/product/all"></Redirect>
                            </Switch>
                        </Product>
                    } />
                    <Route path="/detail/:fish" component={Detail}/>
                    <Route path="/cart" component={Cart}/>
                    <Redirect from="/" to="/home" />
                </Switch>
            </App>
        </Router>
    </Provider>
)

export default router;
// render={()=>
//     <Detail>
//         <Switch>
//             <Route path="/detail/:fish/ticketPrice" component={TicketPrice} />
//             <Route path="/detail/:fish/singerInfo" component={SingerInfo} />                              
//             <Redirect from="/detail/:fish" to="/detail/ticketPrice"></Redirect>
//         </Switch>
//     </Detail>
// }