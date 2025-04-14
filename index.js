const electron = require('electron');
const url = require('url');
const path = require('path');
const fs = require('fs');
const periodictableJson = require(__dirname + '/data/db.json');
const kaydedilenlerJson = require(__dirname + '/data/kaydedilenler.json');

const {
    app,
    BrowserWindow,
    Menu,
    ipcMain
} = electron;

let db;
let mainWindow;

app.on('ready', () => {
    var atomNames = [];
    for (var i = 0; i < periodictableJson.periodic_table.length; i++) {
        atomNames.push(periodictableJson.periodic_table[i].name);
    }
    atomNames.sort();

    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        }
    });
    mainWindow.loadURL(
        url.format({
            pathname: path.join(__dirname, "assets/pages/index.html"),
            protocol: "file:",
            slashes: true,
        })
    );
    mainWindow.maximize();

    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    Menu.setApplicationMenu(mainMenu);

    ipcMain.on("key:newHesapla", (err, data) => {
        createNewHesapWindow();
    });

    ipcMain.on("key:newBilesik", (err, data) => {
        createNewBilesikWindow();
    });

    ipcMain.on("key:newTaguchi", (err, data) => {
        createNewTaguchiWindow();
    });

    ipcMain.on("key:closeApp", (err, data) => {
        app.quit();
    });

    mainWindow.on("close", () => {
        app.quit();
    });

    ipcMain.on("key:NewElement0", (err, data) => {
        addWindow.webContents.send("todo:list0", atomNames);
    });

    ipcMain.on("key:NewElement1", (err, data) => {
        addWindow.webContents.send("todo:list1", atomNames);
    });

    ipcMain.on("key:NewElement2", (err, data) => {
        addWindow.webContents.send("todo:list2", atomNames);
    });

    ipcMain.on("key:NewElement3", (err, data) => {
        addWindow.webContents.send("todo:list3", atomNames);
    });

    ipcMain.on("key:NewElement4", (err, data) => {
        addWindow.webContents.send("todo:list4", atomNames);
    });

    ipcMain.on("key:NewElement5", (err, data) => {
        addWindow.webContents.send("todo:list5", atomNames);
    });

    ipcMain.on("key:NewElement6", (err, data) => {
        addWindow.webContents.send("todo:list6", atomNames);
    });

    ipcMain.on("key:NewElement7", (err, data) => {
        addWindow.webContents.send("todo:list7", atomNames);
    });

    ipcMain.on("key:NewElement8", (err, data) => {
        addWindow.webContents.send("todo:list8", atomNames);
    });

    ipcMain.on("key:NewElement9", (err, data) => {
        addWindow.webContents.send("todo:list9", atomNames);
    });

    ipcMain.on("key:NewElement10", (err, data) => {
        addWindow.webContents.send("todo:list10", atomNames);
    });

    ipcMain.on("Bilesik:Save", (err, data, name) => {
        for (var key in data) {
            kaydedilenlerJson.kaydedilenler.push({
                "isim": name,
                "madde": key,
                "yüzde": data[key]
            });
            fs.writeFileSync(__dirname + "/data/kaydedilenler.json", JSON.stringify(kaydedilenlerJson), function(err) {
                if (err) throw err;
                console.log('complete');
            });
        }
    });

    ipcMain.on("key:NewBilesik0", (err, data) => {
        var bilesikNames = [];
        for (var i = 0; i < kaydedilenlerJson.kaydedilenler.length; i++) {
        	let name = kaydedilenlerJson.kaydedilenler[i].isim;
        	if(bilesikNames.indexOf(name) === -1){
            	bilesikNames.push(name);
        	}
        }
        addWindow.webContents.send("todo:bilesiklist0", bilesikNames);
    });

    ipcMain.on("key:NewBilesik1", (err, data) => {
        var bilesikNames = [];
        for (var i = 0; i < kaydedilenlerJson.kaydedilenler.length; i++) {
        	let name = kaydedilenlerJson.kaydedilenler[i].isim;
        	if(bilesikNames.indexOf(name) === -1){
            	bilesikNames.push(name);
        	}
        }
        addWindow.webContents.send("todo:bilesiklist1", bilesikNames);
    });

    ipcMain.on("key:NewBilesik2", (err, data) => {
        var bilesikNames = [];
        for (var i = 0; i < kaydedilenlerJson.kaydedilenler.length; i++) {
        	let name = kaydedilenlerJson.kaydedilenler[i].isim;
        	if(bilesikNames.indexOf(name) === -1){
            	bilesikNames.push(name);
        	}
        }
        addWindow.webContents.send("todo:bilesiklist2", bilesikNames);
    });

    ipcMain.on("key:NewBilesik3", (err, data) => {
        var bilesikNames = [];
        for (var i = 0; i < kaydedilenlerJson.kaydedilenler.length; i++) {
        	let name = kaydedilenlerJson.kaydedilenler[i].isim;
        	if(bilesikNames.indexOf(name) === -1){
            	bilesikNames.push(name);
        	}
        }
        addWindow.webContents.send("todo:bilesiklist3", bilesikNames);
    });

    ipcMain.on("key:NewBilesik4", (err, data) => {
        var bilesikNames = [];
        for (var i = 0; i < kaydedilenlerJson.kaydedilenler.length; i++) {
        	let name = kaydedilenlerJson.kaydedilenler[i].isim;
        	if(bilesikNames.indexOf(name) === -1){
            	bilesikNames.push(name);
        	}
        }
        addWindow.webContents.send("todo:bilesiklist4", bilesikNames);
    });

    ipcMain.on("key:NewBilesik5", (err, data) => {
        var bilesikNames = [];
        for (var i = 0; i < kaydedilenlerJson.kaydedilenler.length; i++) {
        	let name = kaydedilenlerJson.kaydedilenler[i].isim;
        	if(bilesikNames.indexOf(name) === -1){
            	bilesikNames.push(name);
        	}
        }
        addWindow.webContents.send("todo:bilesiklist5", bilesikNames);
    });

    ipcMain.on("key:NewBilesik6", (err, data) => {
        var bilesikNames = [];
        for (var i = 0; i < kaydedilenlerJson.kaydedilenler.length; i++) {
        	let name = kaydedilenlerJson.kaydedilenler[i].isim;
        	if(bilesikNames.indexOf(name) === -1){
            	bilesikNames.push(name);
        	}
        }
        addWindow.webContents.send("todo:bilesiklist6", bilesikNames);
    });

    ipcMain.on("key:NewBilesik7", (err, data) => {
        var bilesikNames = [];
        for (var i = 0; i < kaydedilenlerJson.kaydedilenler.length; i++) {
        	let name = kaydedilenlerJson.kaydedilenler[i].isim;
        	if(bilesikNames.indexOf(name) === -1){
            	bilesikNames.push(name);
        	}
        }
        addWindow.webContents.send("todo:bilesiklist7", bilesikNames);
    });

    ipcMain.on("taguchi:goWParameters", (err, paramets, valueS, valueP) => {
        console.log(paramets, valueS, valueP);
        addWindow.webContents.loadURL(url.format({
            pathname: path.join(__dirname, "assets/pages/taguchi.html"),
            protocol: "file:",
            slashes: true,
        }));
        addWindow.webContents.once('dom-ready', () => {
            addWindow.webContents.send("taguchi:parametreGönder", paramets, valueS, valueP);
        })
    });

    ipcMain.on("Hesapla:hesapla", (err, data1, data2) => {
        Hesapla(data1, data2);
    });

    ipcMain.on("taguchi:kaydet", (err, valueS, valueP) => {
        console.log(valueP, valueS);
        if (valueS == 2) {
            if (valueP == 2 || valueP == 3) {
                console.log('L4');
                addWindow.webContents.send("show:L4", valueP, valueS);
            } else if (valueP == 4 || valueP == 5 || valueP == 6 || valueP == 7) {
                console.log('L8');
                addWindow.webContents.send("show:L8", valueP, valueS);
            } else if (valueP == 8 || valueP == 9 || valueP == 10 || valueP == 11) {
                console.log('L12');
            } else if (valueP == 12 || valueP == 13 || valueP == 14 || valueP == 15) {
                console.log('L16');
            } else if (valueP == 16 || valueP == 17 || valueP == 18 || valueP == 19 || valueP == 20 || valueP == 21 || valueP == 22 || valueP == 23 || valueP == 24 || valueP == 25 || valueP == 26 || valueP == 27 || valueP == 28 || valueP == 29 || valueP == 30 || valueP == 31) {
                console.log('L32');
            }
        } else if (valueS == 3) {
            if (valueP == 2 || valueP == 3 || valueP == 4) {
                addWindow.webContents.send("show:L9", valueP, valueS);
                console.log('L9');
            } else if (valueP == 5 || valueP == 6 || valueP == 7 || valueP == 8 || valueP == 9 || valueP == 10 || valueP == 11 || valueP == 12 || valueP == 13) {
                addWindow.webContents.send("show:L27", valueP, valueS);
                console.log('L27');
            }
        } else if (valueS == 4) {
            if (valueP == 2 || valueP == 3 || valueP == 4 || valueP == 5) {
                addWindow.webContents.send("show:L16", valueP, valueS);
                console.log('L16');
            }
        } else if (valueS == 5) {
            if (valueP == 2 || valueP == 3 || valueP == 4 || valueP == 5 || valueP == 6) {
                addWindow.webContents.send("show:L25", valueP, valueS);
                console.log('L25');
            }
        }
    });
});

function Hesapla(data1, data2) {
    var toplam = 0;
    var maDizi = {};
    var molAgirlikDizi = {};
    var yuzdeAgirlikDizi = {};
    var bilesenDizi = {};
    var miktarDizi = {};
    var bileşenMiktarlari = {};
    var hesaplananMiktarlar = {};
    var hesaplananGramlar = {};

    for (var key in data1) {
        var ma;
        for (var i = 0; i < periodictableJson.periodic_table.length; i++) {
            if (periodictableJson.periodic_table[i].name == key) {
                ma = periodictableJson.periodic_table[i].atomic_weight;
            }
        }
        var yüzdelik = data1[key]; //HTMLde girdiğimiz elementlerin yüzdesi
        var mol_agirlik = (parseFloat(ma) * parseFloat(yüzdelik));
        molAgirlikDizi[key] = mol_agirlik; // YENİ EKLENDİ
        toplam = parseFloat(toplam) + parseFloat(mol_agirlik);
    }

    for (var key in data1) {
        var ma;
        for (var i = 0; i < periodictableJson.periodic_table.length; i++) {
            if (periodictableJson.periodic_table[i].name == key) {
                ma = periodictableJson.periodic_table[i].atomic_weight;
            }
        }
        var yüzdelik = data1[key]; //HTMLde girdiğimiz elementlerin yüzdesi
        var mol_agirlik = (parseFloat(ma) * parseFloat(yüzdelik));
        var yüzde_agirlik = (mol_agirlik / toplam * 100);
        yuzdeAgirlikDizi[key] = yüzde_agirlik; // YENİ EKLENDİ

        for (var key2 in data2) { //Kullanılmak istenilen ferro alaşımlar
            bilesenDizi[key2] = {};
            for (var i = 0; i < kaydedilenlerJson.kaydedilenler.length; i++) {
                if (kaydedilenlerJson.kaydedilenler[i].isim == key2) {
                    var bilesim_madde_yüzde = kaydedilenlerJson.kaydedilenler[i].yüzde;
                    bilesenDizi[key2][kaydedilenlerJson.kaydedilenler[i].madde] = bilesim_madde_yüzde;
                }
            }
        }
    }

    for (var key in data1) {
        for (var key2 in bilesenDizi) {
            if (!miktarDizi.hasOwnProperty(key)) {
                miktarDizi[key] = 0;
            }
            if (bilesenDizi[key2].hasOwnProperty(key)) {
                miktarDizi[key]++;
            }
        }
    }
    var oldmiktarDizi = miktarDizi
    miktarDizi = JsonValueSırala(miktarDizi);

    for (var key in miktarDizi) { // Atomik değerler
        for (var key2 in yuzdeAgirlikDizi) { // Yüzde ağırlık
            if (key2 == miktarDizi[key]) { // HTMLdeki element ve bileşimleri
                for (var key3 in bilesenDizi) { // Alaşımdaki element ve bileşimleri
                    if (bilesenDizi[key3].hasOwnProperty(key2)) { //Eğer alaşımda key2 değerindeki element(HTMLdeki) varsa
                        for (var key4 in oldmiktarDizi) {
                            if (key4 == miktarDizi[key]) {
                                if (oldmiktarDizi[key4] <= 1) {
                                    bileşenMiktarlari[key3] = yuzdeAgirlikDizi[key2] / bilesenDizi[key3][key2]
                                    hesaplananGramlar[key3] = (yuzdeAgirlikDizi[key2] / bilesenDizi[key3][key2] * 100).toFixed(4)
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    for (var key in bilesenDizi) {
        for (var key2 in bileşenMiktarlari) {
            if (key2 == key) {
                for (var key3 in bilesenDizi[key]) {
                    if (hesaplananMiktarlar.hasOwnProperty([key3])) {
                        hesaplananMiktarlar[key3] = hesaplananMiktarlar[key3] + (bilesenDizi[key][key3] * bileşenMiktarlari[key2])
                    } else {
                        hesaplananMiktarlar[key3] = (bilesenDizi[key][key3] * bileşenMiktarlari[key2])
                    }
                }
            }
        }
    }

    for (var key in yuzdeAgirlikDizi) {
        for (var key2 in hesaplananMiktarlar) {
            if (key == key2) {
                var fark = yuzdeAgirlikDizi[key] - hesaplananMiktarlar[key2];
                if (fark > 0) {
                    hesaplananGramlar[key] = (yuzdeAgirlikDizi[key] - hesaplananMiktarlar[key2]).toFixed(3)
                }
            }

        }
    }
    addWindow.webContents.send("todo:test", hesaplananGramlar);
}

function JsonValueSırala(MIKTAR) {
    return (Object.keys(MIKTAR).sort((k1, k2) => MIKTAR[k1] - MIKTAR[k2]));
}

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

const mainMenuTemplate = [{
    label: "Dosya",
    submenu: [{
        label: "Yeni"
    }, {
        label: "Geliştirici Aracı",
        click(item, focusedWindow) {
            focusedWindow.toggleDevTools();
        }
    }, {
        label: "Çıkış",
        role: "quit"
    }]
}]

function createNewHesapWindow() {
    addWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        width: 1500,
        height: 800,
        title: "Hesaplama Yap"
    });

    addWindow.loadURL(url.format({
        pathname: path.join(__dirname, "assets/pages/hesaplamaWindow.html"),
        protocol: "file:",
        slashes: true,
    }));

    mainWindow.webContents.once("dom-ready", () => {
        console.log(1)
    });

    addWindow.on("close", () => {
        addWindow = null;
    });
}

function createNewBilesikWindow() {
    addWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        width: 1500,
        height: 800,
        title: "Bileşik Ekle"
    });

    addWindow.loadURL(url.format({
        pathname: path.join(__dirname, "assets/pages/newBilesikWindow.html"),
        protocol: "file:",
        slashes: true,
    }));

    mainWindow.webContents.once("dom-ready", () => {
        console.log(1)
    });

    addWindow.on("close", () => {
        addWindow = null;
    });
}

function createNewTaguchiWindow() {
    addWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        width: 1500,
        height: 800,
        title: "Bileşik Ekle"
    });

    addWindow.loadURL(url.format({
        pathname: path.join(__dirname, "assets/pages/taguchiParameters.html"),
        protocol: "file:",
        slashes: true,
    }));

    mainWindow.webContents.once("dom-ready", () => {
        console.log(1)
    });

    addWindow.on("close", () => {
        addWindow = null;
    });
}