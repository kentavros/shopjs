"use strict";

var controlApp = function () {

    var self = this;

    this.products = [];
    this.selectedData = {};
    this.filteredData = [];

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
        sizes = sizes.filter(uniqueVal);
        //console.log(sizes);
        return sizes;
    };

    this.getColors = function(){
        var arrObjs = this.products;
        var colors = [];
        arrObjs.forEach(function(val){
            colors.push(val.color);
        });
        colors = colors.filter(uniqueVal);
        //console.log(colors);
        return colors;
    };

    this.drowSelector = function (el, str1, cat, str2, size, str3, color) {

        //Create Select categories
        var select = document.createElement("select");
        select.setAttribute("class", "form-control br0");
        select.setAttribute("id", str1);
        select.addEventListener("change", this.selectCat);
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
        select2.setAttribute("class", "form-control br0");
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
        select3.setAttribute("class", "form-control br0");
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
        selSort.setAttribute("class", "form-control br0");
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
        var btnClear = document.createElement("span");
        btnClear.setAttribute("type", "button");
        btnClear.setAttribute("class", "btn br1");
        btnClear.addEventListener("click", this.clearFilter);
        btnClear.innerHTML = "Clear Filtor";
        el.appendChild(btnClear);
    };

    this.selectCat = function () {
        var selected = this.options[this.selectedIndex].value;
        if(selected !== "Categories"){
            self.selectedData['category'] = selected;
            self.productsfilter();

        }
    };

    this.productsfilter = function () {
        alert(1);
        for(var key in self.products){
            for(var prop in self.selectedData){
                if (self.products[key][prop] == self.selectedData[prop]){
                    //проверить свойство в объекте и удалить если такое есть

                    //потом пушим
                    self.filteredData.push(self.products[key]);
                }
            }
        }
        //DELETE odinakovie obj!!!!!! eto posle vsex viborok
        console.log(self.filteredData);
        self.drowGoods();

    };

    this.drowGoods = function () {
        if(self.filteredData.length == 0){
            alert('drow to deF');
        }
        else{
            alert('drow selected');
        }
    };

    this.clearFilter = function () {
        alert("Clear success!");
    }
};


var app = new controlApp();
app.products = products;

var categories = app.getCategories();
var sizes = app.getSizes();
var colors = app.getColors();

var div = document.querySelector(".select");

app.drowSelector(div, "Categories", categories, "Sizes", sizes, "Colors", colors);
app.drowGoods();