"use strict";

var controlApp = function () {

    this.products = [];

    // function uniqueVal (val, index, arr) {
    //     var uniqArr =[];
    //     nextInput:
    //     for (var i=0; i<arr.length; i++){
    //         var str = arr[i];
    //         for (var j=0; j<uniqArr.length; j++){
    //             if(uniqArr[j] == str) {
    //                 continue nextInput;
    //             }
    //         }
    //         uniqArr.push(str);
    //     }
    //
    //     return uniqArr;
    // }

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
        console.log(categories);
        return categories;
    };

    this.dataSelector=function (data) {

        //return arr
    };

    this.productsfilter = function () {

    };

    this.drowSelector = function () {

    };
};


var app = new controlApp();
app.products = products;

app.getCategories();

