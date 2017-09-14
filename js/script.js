"use strict";

var controlApp = function () {

    this.products = [];

    function uniqueVal(value, index, self) {
        return self.indexOf(value) === index;
    }

    this.getCategories = function () {
        var arrObjs = this.products;
        var categories = [];
        arrObjs.forEach(function (val) {
            categories.push(val.category);
        });
        categories = categories.filter(uniqueVal);
        //console.log(categories);
        return categories;
    };

    this.getSizes = function (){
        var arrObjs = this.products;
        var sizes = [];
        arrObjs.forEach(function(val){
            val.size.forEach(function(v){
                sizes.push(v);
            });
        });
        var sizes = sizes.filter(uniqueVal);
        //console.log(sizes);
        return sizes;
    };

    this.getColors = function(){
        var arrObjs = this.products;
        var colors = [];
        arrObjs.forEach(function(val){
            colors.push(val.color);
        });
        var colors = colors.filter(uniqueVal);
        //console.log(colors);
        return colors;
    };

    this.drowSelector = function (el, str1, cat, str2, size, str3, color) {

        var div = document.createElement("div");
        div.setAttribute("class", "row");
        var divCat = document.createElement("div");
        div.setAttribute("class", "col-3");


        //Create Select categories
        var select = document.createElement("select");
        select.setAttribute("class", "form-control");
        select.setAttribute("id", str1);

        var optionDef = document.createElement("option");
        optionDef.style.fontWeight = 'bold';
        optionDef.innerHTML = str1;

        el.appendChild(select);
        select.appendChild(optionDef);
        cat.forEach(function(val){
            var option = document.createElement("option");
            option.setAttribute("value", val);
            option.innerHTML = val;
            select.appendChild(option);
        });

        //Create select sizes
        var select2 = document.createElement("select");
        select2.setAttribute("class", "form-control");
        select2.setAttribute("id", str2);

        var optionDef2 = document.createElement("option");
        optionDef2.style.fontWeight = 'bold';
        optionDef2.innerHTML = str2;

        el.appendChild(select2);
        select2.appendChild(optionDef2);
        size.forEach(function(val2){
            var option2 = document.createElement("option");
            option2.setAttribute("value", val2);
            option2.innerHTML = val2;
            select2.appendChild(option2);
        });

        //Create select color

        var select3 = document.createElement("select");
        select3.setAttribute("class", "form-control");
        select3.setAttribute("id", str3);

        var optionDef3 = document.createElement("option");
        optionDef3.style.fontWeight = 'bold';
        optionDef3.innerHTML = str3;

        el.appendChild(select3);
        select3.appendChild(optionDef3);
        color.forEach(function(val3){
            var option3 = document.createElement("option");
            option3.setAttribute("value", val3);
            option3.innerHTML = val3;
            select3.appendChild(option3);
        });

        //Create select sort

        var selSort = document.createElement("select");
        selSort.setAttribute("class", "form-control");
        selSort.setAttribute("id", "sort");

        var optionSortDef = document.createElement("option");
        optionSortDef.style.fontWeight = 'bold';
        optionSortDef.innerHTML = "Sort";
        var optionSort1 = document.createElement("option");
        optionSort1.setAttribute("Value", "low");
        optionSort1.innerHTML = "Lowest price first";
        var optionSort2 = document.createElement("option");
        optionSort2.setAttribute("Value", "high");
        optionSort2.innerHTML = "Highest price first";

        el.appendChild(selSort);
        selSort.appendChild(optionSortDef);
        selSort.appendChild(optionSort1);
        selSort.appendChild(optionSort2);

        //Create reset
        var btnClear = document.createElement("button");
        btnClear.setAttribute("type", "reset");
        btnClear.innerHTML = "Clear Filtor"
        el.appendChild(btnClear);


    };


    this.productsfilter = function () {

    };


};


var app = new controlApp();
app.products = products;

var categories = app.getCategories();
var sizes = app.getSizes();
var colors = app.getColors();

var div = document.querySelector(".select");

app.drowSelector(div, "Categories", categories, "Sizes", sizes, "Colors", colors);