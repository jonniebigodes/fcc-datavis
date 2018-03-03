import {dataVisConstant} from './Constants';
class Utilities{
    static setStorageData(token,value){
        // console.log('====================================');
        // console.log(`data to storage token:${token}\ndata:${JSON.stringify(value,null,2)}`);
        // console.log('====================================');
        localStorage.setItem(token,JSON.stringify(value));
    }
    static getStorageData(value){
        return localStorage.getItem(value);
        /* let resultAuthData= localStorage.getItem("bookapp_storage");
        console.log('====================================');
        console.log(`data from storage:${JSON.stringify(resultAuthData,null,2)}`);
        console.log('====================================');
        return resultAuthData; */
    }
    static clearStorage(){
        localStorage.clear();
    }
    static forcePreload(){
        const max=dataVisConstant.forcePreloader.length;
        const min=1;
        return dataVisConstant.forcePreloader[Math.floor(Math.random()*(max-min+1))+min];
    }
    static loadCountryInfo(value){
        return dataVisConstant.countryInfo[value];
    }
}


export default Utilities;