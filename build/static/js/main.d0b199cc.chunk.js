(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports={BreadBottom:"BurgerIngredient__BreadBottom__pgUas",BreadTop:"BurgerIngredient__BreadTop__1qwk-",Seeds1:"BurgerIngredient__Seeds1__1NoR3",Seeds2:"BurgerIngredient__Seeds2__rJjjN",Meat:"BurgerIngredient__Meat__27By3",Cheese:"BurgerIngredient__Cheese__3Xxg-",Salad:"BurgerIngredient__Salad__PEJF9",Bacon:"BurgerIngredient__Bacon__1FuPv",BatataPalha:"BurgerIngredient__BatataPalha__1HSoi",Seeds3:"BurgerIngredient__Seeds3__1MCqc",Seeds4:"BurgerIngredient__Seeds4__34oEa"}},14:function(e,t,a){e.exports={SideDrawer:"SideDrawer__SideDrawer__21TuB",Open:"SideDrawer__Open__1pVYR",Close:"SideDrawer__Close__3Yv1l",Logo1a:"SideDrawer__Logo1a__1W6Hx"}},16:function(e,t,a){e.exports={BuildControl:"BuildControl__BuildControl__1jYc3",Label:"BuildControl__Label__33Z-p",Less:"BuildControl__Less__377MJ",More:"BuildControl__More__28-hQ"}},20:function(e,t,a){e.exports={Toolbar:"Toolbar__Toolbar__2JJW-",Logo1b:"Toolbar__Logo1b__3P3EK",DesktopOnly:"Toolbar__DesktopOnly__WADUd"}},21:function(e,t,a){e.exports={BuildControls:"BuildControls__BuildControls__3_01f",OrderButton:"BuildControls__OrderButton__myBwT",enable:"BuildControls__enable__3jYIq"}},22:function(e,t,a){e.exports={Button:"Button__Button__QI7b2",Success:"Button__Success__2dHUt",Danger:"Button__Danger__2xnhN"}},37:function(e,t,a){e.exports={Content:"Layout__Content__3pLYC"}},38:function(e,t,a){e.exports=a.p+"static/media/burger-logo.b8503d26.png"},39:function(e,t,a){e.exports={Logo:"Logo__Logo__2isxd"}},40:function(e,t,a){e.exports={NavigationItems:"NavigationItems__NavigationItems___yd_d"}},41:function(e,t,a){e.exports={NavigationItem:"NavigationItem__NavigationItem__23bcu",active:"NavigationItem__active__2zJdO"}},42:function(e,t,a){e.exports={DrawerToggle:"DrawerToggle__DrawerToggle__26to0"}},43:function(e,t,a){e.exports={Backdrop:"Backdrop__Backdrop__efy1y"}},44:function(e,t,a){e.exports={Burger:"Burger__Burger__3K4F-"}},45:function(e,t,a){e.exports={Modal:"Modal__Modal__32_-a"}},46:function(e,t,a){e.exports={Loader:"Spinner__Loader__1DDwY",load5:"Spinner__load5__3b3Nk"}},48:function(e,t,a){e.exports={CheckoutSummary:"CheckoutSummary__CheckoutSummary__1xBm4"}},52:function(e,t,a){e.exports=a(79)},57:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(36),c=a.n(o),l=a(19),i=(a(57),a(2)),s=a(3),u=a(5),d=a(4),m=a(6),p=a(12),h=function(e){return e.children},_=a(37),g=a.n(_),b=a(20),f=a.n(b),E=a(38),v=a.n(E),C=a(39),k=a.n(C),y=function(e){return r.a.createElement("div",{className:k.a.Logo},r.a.createElement("img",{src:v.a,alt:"MyBurger"}))},B=a(40),w=a.n(B),O=a(41),S=a.n(O),j=function(e){return r.a.createElement("li",{className:S.a.NavigationItem},r.a.createElement("a",{href:e.link,className:e.active?"active":null},e.children))},N=function(){return r.a.createElement("ul",{className:w.a.NavigationItems},r.a.createElement(j,{link:"/",active:!0},"Ingredientes de hamb\xfarguer"),r.a.createElement(j,{link:"/"},"CheckOut"))},D=a(42),I=a.n(D),x=function(e){return r.a.createElement("div",{className:I.a.DrawerToggle,onClick:e.clicked},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))},T=function(e){return r.a.createElement("header",{className:f.a.Toolbar},r.a.createElement(x,{clicked:e.drawerToggleClicked}),r.a.createElement(y,null),r.a.createElement("nav",{className:f.a.DesktopOnly},r.a.createElement(N,null)))},H=a(14),L=a.n(H),P=a(43),M=a.n(P),A=function(e){return e.show?r.a.createElement("div",{className:M.a.Backdrop,onClick:e.clicked}):null},R=function(e){var t=[L.a.SideDrawer,L.a.Close];return e.open&&(t=[L.a.SideDrawer,L.a.Open]),r.a.createElement(h,null,r.a.createElement(A,{show:e.open,clicked:e.closed}),r.a.createElement("div",{className:t.join(" ")},r.a.createElement("div",{className:L.a.Logo1a},r.a.createElement(y,null)),r.a.createElement("nav",null,r.a.createElement(N,null))))},U=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={showSideDrawer:!1},a.sideDrawerClosedHandler=function(){a.setState({showSideDrawer:!1})},a.sideDrawerToggleHandler=function(){a.setState(function(e){return{showSideDrawer:!e.showSideDrawer}})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(h,null,r.a.createElement(T,{drawerToggleClicked:this.sideDrawerToggleHandler}),r.a.createElement(R,{open:this.state.showSideDrawer,closed:this.sideDrawerClosedHandler}),r.a.createElement("main",{className:g.a.Content},this.props.children))}}]),t}(n.Component),W=a(17),J=a(51),Y=a(44),q=a.n(Y),F=a(10),Q=a.n(F),z=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=r.a.createElement("div",{className:Q.a.BreadBottom});break;case"bread-top":e=r.a.createElement("div",{className:Q.a.BreadTop},r.a.createElement("div",{className:Q.a.Seeds1}),r.a.createElement("div",{className:Q.a.Seeds2}));break;case"meat":e=r.a.createElement("div",{className:Q.a.Meat});break;case"cheese":e=r.a.createElement("div",{className:Q.a.Cheese});break;case"salad":e=r.a.createElement("div",{className:Q.a.Salad});break;case"bacon":e=r.a.createElement("div",{className:Q.a.Bacon});break;case"batatapalha":e=r.a.createElement("div",{className:Q.a.BatataPalha},r.a.createElement("div",{className:Q.a.Seeds3}),r.a.createElement("div",{className:Q.a.Seeds4}));break;default:e=null}return e}}]),t}(n.Component),K=function(e){var t=Object.keys(e.ingredients).map(function(t){return Object(J.a)(Array(e.ingredients[t])).map(function(e,a){return r.a.createElement(z,{key:t+a,type:t})})}).reduce(function(e,t){return e.concat(t)},[]);return 0===t.length&&(t=r.a.createElement("p",null,"Por favor insira ingredientes!")),r.a.createElement("div",{className:q.a.Burger},r.a.createElement(z,{type:"bread-top"}),t,r.a.createElement(z,{type:"bread-bottom"}))},$=a(21),V=a.n($),X=a(16),Z=a.n(X),G=function(e){return r.a.createElement("div",{className:Z.a.BuildControl},r.a.createElement("div",{className:Z.a.Label},e.label),r.a.createElement("button",{className:Z.a.Less,onClick:e.removed,disabled:e.disabled},"Menos :("),r.a.createElement("button",{className:Z.a.More,onClick:e.added},"Mais!"))},ee=[{label:"Salada",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Queijo mu\xe7arela",type:"cheese"},{label:"Carne 120g",type:"meat"},{label:"Batata-Palha",type:"batatapalha"}],te=function(e){return r.a.createElement("div",{className:V.a.BuildControls},r.a.createElement("p",null,"Pre\xe7o Atual: ",r.a.createElement("strong",null,"R$",e.price.toFixed(2))),ee.map(function(t){return r.a.createElement(G,{key:t.label,label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabled[t.type]})}),r.a.createElement("button",{className:V.a.OrderButton,disabled:!e.purchasable,onClick:e.ordered},"FECHAR PEDIDO"))},ae=a(45),ne=a.n(ae),re=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"componentWillUpdate",value:function(){console.log("[Modal] WillUpdate!")}},{key:"render",value:function(){return r.a.createElement(h,null,r.a.createElement(A,{show:this.props.show,clicked:this.props.modalClosed}),r.a.createElement("div",{className:ne.a.Modal,style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"}},this.props.children))}}]),t}(n.Component),oe=a(22),ce=a.n(oe),le=function(e){return r.a.createElement("button",{onClick:e.clicked,className:[ce.a.Button,ce.a[e.btnType]].join(" ")},e.children)},ie=function(e){var t=Object.keys(e.ingredients).map(function(t){return r.a.createElement("li",{key:t},r.a.createElement("span",{style:{textTransform:"capitalize"}},t,":")," ",e.ingredients[t])});return r.a.createElement(h,null,r.a.createElement("h3",null,"Seu pedido:"),r.a.createElement("p",null,"Um delicioso hamb\xfarger com os ingredientes:"),r.a.createElement("ul",null,t),r.a.createElement("p",null,r.a.createElement("strong",null,"Pre\xe7o: ",e.price)),r.a.createElement("p",null,"Seguir para o check-out?"),r.a.createElement(le,{btnType:"Danger",clicked:e.purchaseCancelled},"Cancelar"),r.a.createElement(le,{btnType:"Success",clicked:e.purchaseContinued},"Continuar"))},se=a(46),ue=a.n(se),de=function(){return r.a.createElement("div",{className:ue.a.Loader},"Carregando")},me=function(e,t){return function(a){function n(){var e,t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(u.a)(this,(e=Object(d.a)(n)).call.apply(e,[this].concat(r)))).state={error:null},t.errorConfirmedHandler=function(){t.setState({error:null})},t}return Object(m.a)(n,a),Object(s.a)(n,[{key:"componentWillMount",value:function(){var e=this;this.nomeDoInterceptor=t.interceptors.request.use(function(t){return e.setState({error:null}),t}),this.nomeDoResponseInterceptor=t.interceptors.response.use(function(e){return e},function(t){e.setState({error:t})})}},{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.nomeDoInterceptor),t.interceptors.response.eject(this.nomeDoResponseInterceptor)}},{key:"render",value:function(){return r.a.createElement(h,null,r.a.createElement(re,{modalClosed:this.errorConfirmedHandler,show:this.state.error},this.state.error?this.state.error.message:null),r.a.createElement(e,this.props))}}]),n}(n.Component)},pe=a(47),he=a.n(pe).a.create({baseURL:"https://burger-5e6b7.firebaseio.com/"}),_e={salad:.5,cheese:.4,bacon:1,meat:1.5,batatapalha:.35},ge=me(function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={ingredients:null,totalPrice:4,purchasabale:!1,purchasing:!1,loading:!1,error:!1},a.purchaseContinuedHandler=function(){var e=[];for(var t in a.state.ingredients)e.push(encodeURIComponent(t)+"="+encodeURIComponent(a.state.ingredients[t]));var n=e.join("&");a.props.history.push({pathname:"/checkout",search:"/"+n})},a.purchaseCancelHandler=function(){a.setState({purchasing:!1})},a.purchaseHandler=function(){a.setState({purchasing:!0})},a.updatePurchaseState=function(e){var t=Object.keys(e).map(function(t){return e[t]}).reduce(function(e,t){return e+t},0);a.setState({purchasable:t>0})},a.addIngredientHandler=function(e){var t=a.state.ingredients[e]+1,n=Object(W.a)({},a.state.ingredients);n[e]=t;var r=_e[e],o=a.state.totalPrice+r;a.setState({totalPrice:o,ingredients:n}),a.updatePurchaseState(n)},a.removeIngredientHandler=function(e){var t=a.state.ingredients[e];if(!(t<=0)){var n=t-1,r=Object(W.a)({},a.state.ingredients);r[e]=n;var o=_e[e],c=a.state.totalPrice-o;a.setState({totalPrice:c,ingredients:r}),a.updatePurchaseState(r)}},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;he.get("https://burger-5e6b7.firebaseio.com/ingredients.json").then(function(t){e.setState({ingredients:t.data})}).catch(function(t){e.setState({error:!0})})}},{key:"render",value:function(){var e=Object(W.a)({},this.state.ingredients);for(var t in e)e[t]=e[t]<=0;var a=null,n=this.state.error?r.a.createElement("p",null,"N\xe3o consigo carregar os ingredientes!"):r.a.createElement(de,null);return this.state.ingredients&&(a=r.a.createElement(ie,{ingredients:this.state.ingredients,purchaseCancelled:this.purchaseCancelHandler,purchaseContinued:this.purchaseContinuedHandler,price:this.state.totalPrice}),n=r.a.createElement(h,null,r.a.createElement(K,{ingredients:this.state.ingredients}),r.a.createElement("br",null),r.a.createElement(te,{ingredientAdded:this.addIngredientHandler,ingredientRemoved:this.removeIngredientHandler,disabled:e,price:this.state.totalPrice,purchasable:this.state.purchasable,ordered:this.purchaseHandler}))),this.state.loading&&(a=r.a.createElement(de,null)),r.a.createElement(h,null,r.a.createElement(re,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandler},a),n)}}]),t}(n.Component),he),be=a(48),fe=a.n(be),Ee=function(e){return r.a.createElement("div",{className:fe.a.CheckoutSummary},r.a.createElement("h1",null,"Que esteja delicioso!"),r.a.createElement("div",{style:{width:"100%",margin:"auto"}},r.a.createElement(K,{ingredients:e.ingredients})),r.a.createElement(le,{btnType:"Danger",clicked:e.checkoutCancelled},"CANCELAR"),r.a.createElement(le,{btnType:"Success",clicked:e.checkoutContinued},"CONTINUAR"))},ve=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={ingredients:{salad:1,meat:1,cheese:1,batatapalha:1,bacon:1}},a.checkOutCanceledHandler=function(){a.props.history.goBack()},a.checkoutContinuedHandler=function(){a.props.history.replace("/checkout/contact-data")},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(Ee,{ingredients:this.state.ingredients,checkoutCanceled:this.checkOutCanceledHandler,checkoutContinued:this.checkoutContinuedHandler}))}}]),t}(n.Component),Ce=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(U,null,r.a.createElement(p.c,null,r.a.createElement(p.a,{path:"/checkout",component:ve}),r.a.createElement(p.a,{path:"/",exact:!0,component:ge}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ke=r.a.createElement(l.a,null,r.a.createElement(Ce,null));c.a.render(ke,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[52,1,2]]]);
//# sourceMappingURL=main.d0b199cc.chunk.js.map