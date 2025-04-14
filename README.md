# 🔬 Material Taguchi Calculator

2019 yılında mühendislik tasarım projesi olarak ElectronJS ile geliştirilen, malzeme bilimi ve metalurji hesaplamaları için masaüstü uygulaması.

## 📋 Genel Bakış

Bu uygulama, malzeme mühendisliği eğitimi sırasında malzeme bilimi ve metalurjide kullanılan karmaşık hesaplamaları basitleştirmek için geliştirilmiştir. Metalurji mühendisliği bilgisini yazılım geliştirme becerileriyle birleştirerek, akademik ve profesyonel kullanım için pratik bir araç oluşturmaktadır.

## ✨ Özellikler

-   **🧪 Periyodik Tablo Entegrasyonu**: Elementlerin atomik ağırlıkları ve özellikleri için JSON veritabanı
-   **⚖️ Malzeme Kompozisyon Hesaplayıcı**: Alaşım formülasyonları için ağırlık ve yüzde hesaplamaları
-   **📊 Taguchi Metodu Modülü**: Deney tasarımı ve optimizasyon için parametrik analiz aracı
-   **💾 Veri Yönetimi**: Formülasyonları kaydetme ve geri çağırma

## 🛠️ Kullanılan Teknolojiler

-   **⚡ Electron.js**: Cross-platform masaüstü uygulama çerçevesi
-   **🔄 Node.js**: Arka plan işlemleri ve hesaplamalar
-   **🎨 HTML/CSS/JavaScript**: Kullanıcı arayüzü
-   **📁 JSON/Sqlite**: Veri depolama

## 📥 Kurulum

### Gereksinimler

-   Node.js (v12.x veya daha yüksek önerilir)
-   npm (v6.x veya daha yüksek)

### Adımlar

1. Bu depoyu klonlayın

```
git clone https://github.com/onurcansevinc/material-taguchi-calculator.git
```

2. Proje dizinine gidin

```
cd material-taguchi-calculator
```

3. Bağımlılıkları yükleyin

```
npm install
```

4. Uygulamayı başlatın

```
npm start
```

## 🚀 Kullanım

Uygulama üç ana modüle sahiptir:

1. **⚗️ Kompozisyon Hesaplayıcı**: Element yüzdelerine göre alaşım kompozisyonlarını hesaplama
2. **🧬 Bileşik Yönetimi**: Bileşik formülasyonları oluşturma ve saklama
3. **📈 Taguchi Analizi**: Deney tasarımı için Taguchi metodu analizi yapma

## 📂 Proje Yapısı

-   `/assets`: Kullanıcı arayüzü öğeleri ve frontend sayfaları
-   `/data`: JSON veritabanları ve kaydedilmiş hesaplamalar
-   `index.js`: Ana uygulama giriş noktası

## 📸 Ekran Görüntüleri

### Ana Ekran

![Ana Ekran](/screenshots/main-screen.png)

### Periyodik Tablo

![Periyodik Tablo](/screenshots/periodic-table.png)

### Kompozisyon Hesaplayıcı

![Kompozisyon Hesaplayıcı](/screenshots/composition-calculator.png)

### Taguchi Analizi

![Taguchi Analizi](/screenshots/taguchi-analysis.png)

## 👨‍💻 Geliştiriciler

-   Onur Can Sevinç
-   Berk Ceyhan
