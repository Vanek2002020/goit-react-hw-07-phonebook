(this["webpackJsonpreact-7-phonebook"]=this["webpackJsonpreact-7-phonebook"]||[]).push([[0],{16:function(t,e,n){t.exports={Section__heading:"Section_Section__heading__19HOp",Section:"Section_Section__28cFh",Phonebook:"Section_Phonebook__1Xagq Section_Section__28cFh",Contacts:"Section_Contacts__3V9NY Section_Section__28cFh"}},17:function(t,e,n){t.exports={ContactsItem:"ContactsItem_ContactsItem__11zEp",ContactsItem__button:"ContactsItem_ContactsItem__button__pZz3i"}},18:function(t,e,n){t.exports={Contacts__list:"Contacts_Contacts__list__1VugH",Contacts__message:"Contacts_Contacts__message__37URU"}},30:function(t,e,n){},38:function(t,e,n){},47:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),o=n(13),r=n.n(o),s=(n(30),n(25)),i=n(21),u=n(1),l=n(22),d=n(5),m=Object(l.a)({reducerPath:"contactsApi",baseQuery:Object(d.d)({baseUrl:"https://61bdde042a1dd4001708a162.mockapi.io/api/v1/"}),tagTypes:["Contacts"],endpoints:function(t){return{fetchContacts:t.query({query:function(){return"/contacts"},providesTags:["Contacts"]}),addContact:t.mutation({query:function(t){return{url:"/contacts",method:"POST",body:{name:t.name,phone:t.phone}}},invalidatesTags:["Contacts"]}),deleteContact:t.mutation({query:function(t){return{url:"/contacts/".concat(t),method:"DELETE"}},invalidatesTags:["Contacts"]})}}}),_=m.useFetchContactsQuery,b=m.useAddContactMutation,h=m.useDeleteContactMutation,j=Object(u.a)({reducer:Object(i.a)({},m.reducerPath,m.reducer),middleware:function(t){return[].concat(Object(s.a)(t()),[m.middleware])},devTools:!1}),p=n(11),x=(n(38),n(20)),C=n.n(x),O=n(24),f=n(16),g=n.n(f),v=n(2);function F(t){var e=t.text,n=t.className,a=t.children;return Object(v.jsxs)("section",{className:(g.a.Section,g.a[n]),children:[Object(v.jsx)("h2",{className:g.a.Section__heading,children:e}),a]})}var N=n(9),S=n.n(N),y=n(15),k=n.n(y);var w=function(){var t=_().data,e=b(),n=Object(p.a)(e,2),a=n[0],c=n[1].isLoading,o=function(e){return t.find((function(t){return t.name.toLowerCase()===e.toLowerCase()}))},r=function(){var t=Object(O.a)(C.a.mark((function t(e){var n,c;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.preventDefault(),n=e.currentTarget.elements.name.value,c=e.currentTarget.elements.number.value,!o(n)){t.next=8;break}return alert("".concat(n," is already in contacts!")),t.abrupt("return");case 8:return e.currentTarget.reset(),t.prev=9,t.next=12,a({name:n,phone:c});case 12:t.next=17;break;case 14:t.prev=14,t.t0=t.catch(9),console.log(t.t0.message);case 17:case"end":return t.stop()}}),t,null,[[9,14]])})));return function(e){return t.apply(this,arguments)}}();return Object(v.jsx)(F,{className:"Phonebook",text:"Phonebook",children:Object(v.jsxs)("form",{onSubmit:r,className:S.a.Form,children:[Object(v.jsx)("label",{htmlFor:"input-name",className:S.a.Form__item,children:"Name"}),Object(v.jsx)("input",{className:S.a.Form__input,id:"input-name",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0}),Object(v.jsx)("label",{htmlFor:"input-tel",className:S.a.Form__item,children:"Phone number"}),Object(v.jsx)("input",{className:S.a.Form__input,id:"input-tel",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0}),Object(v.jsxs)("button",{type:"submit",disabled:c,className:S.a.Form__button,children:["Add contact",c&&Object(v.jsx)(k.a,{color:"#000000",size:12})]})]})})};var T=function(t){var e=t.onChange;return Object(v.jsxs)("label",{htmlFor:"search",children:["Find contacts by name:",Object(v.jsx)("input",{id:"search",type:"text",onChange:e})]})},I=n(17),A=n.n(I);function q(t){var e=t.id,n=t.item,a=h(),c=Object(p.a)(a,2),o=c[0],r=c[1].isLoading,s=n.name,i=n.phone;return Object(v.jsxs)("li",{id:e,className:A.a.ContactsItem,children:[Object(v.jsxs)("span",{className:A.a.ContactsItem__text,children:[s,": ",i]}),Object(v.jsx)("button",{className:A.a.ContactsItem__button,onClick:function(){return o(e)},disabled:r,children:r?"Deleting...":"Delete"})]},e)}var z=n(18),P=n.n(z);var L=function(t){var e=t.data;return Object(v.jsx)(F,{className:P.a.Contacts,text:"Contacts",children:e&&Object(v.jsx)("ul",{className:P.a.Contacts__list,children:0===e.length?Object(v.jsx)("h3",{className:P.a.Contacts__message,children:"Nothing is here"}):e.map((function(t){return Object(v.jsx)(q,{id:t.id,item:t},t.id)}))})})};var E=function(){var t=Object(a.useState)(""),e=Object(p.a)(t,2),n=e[0],c=e[1],o=_(),r=o.data,s=o.isFetching;return Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)(w,{}),Object(v.jsx)(T,{onChange:function(t){return c(t.target.value)}}),s?Object(v.jsx)(k.a,{color:"#000000",size:150}):Object(v.jsx)(L,{data:function(t){var e=n.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(e)}))}(r)})]})},D=n(4);r.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(D.a,{store:j,children:Object(v.jsx)(E,{})})}),document.getElementById("root"))},9:function(t,e,n){t.exports={Form:"Form_Form__3hlRl",Form__item:"Form_Form__item__2qwN3",Form__input:"Form_Form__input__3lTeE"}}},[[47,1,2]]]);
//# sourceMappingURL=main.3c192581.chunk.js.map