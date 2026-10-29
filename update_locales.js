const fs = require('fs');
const path = require('path');

// Dicționarul cu traducerile pentru cheia "footer_credits"
const creditsTranslations = {
  "en": "Developed with passion for makers and online radio lovers by Daradics Levente",
  "ro": "Dezvoltat cu pasiune pentru creatori și iubitorii de radio online de Daradics Levente",
  "hu": "Szenvedéllyel fejlesztve készítők és online rádió kedvelők számára Daradics Levente által",
  "pl": "Opracowane z pasją dla twórców i miłośników radia internetowego przez Daradicsa Levente",
  "de": "Mit Leidenschaft für Maker und Online-Radio-Liebhaber entwickelt von Daradics Levente",
  "fr": "Développé avec passion pour les créateurs et les passionnés de radio en ligne par Daradics Levente",
  "es": "Desarrollado con pasión para creadores y amantes de la radio online por Daradics Levente",
  "it": "Sviluppato con passione per i maker e gli amanti della radio online da Daradics Levente",
  "nl": "Met passie ontwikkeld voor makers en online radioliefhebbers door Daradics Levente",
  "pt": "Desenvolvido com paixão para criadores e amantes de rádio online por Daradics Levente",
  "cs": "Vyvinuto s vášní pro tvůrce a milovníky online rádia od Daradicse Levente",
  "sv": "Utvecklat med passion för makare och onlineradioälskare av Daradics Levente",
  "da": "Udviklet med passion for skabere og onlineradio-elskere af Daradics Levente",
  "uk": "Розроблено з пристрастю для мейкерів та любителів онлайн-радіо Дарадічем Левенте",
  "sk": "Vyvinuté s vášňou pre tvorcov a milovníkov online rádia od Daradicsa Levente",
  "bg": "Разработено със страст за творци и любители на онлайн радиото от Дарадич Левенте",
  "hr": "Razvijeno s strasti za kreativce i ljubitelje online radija od strane Daradicsa Leventea",
  "fi": "Kehitetty suurella sydämellä tekijöille ja nettiradion ystäville: Daradics Levente",
  "el": "Αναπτύχθηκε με πάθος για δημιουργούς και λάτρεις του διαδικτυακού ραδιοφώνου από τον Daradics Levente",
  "no": "Utviklet med lidenskap for skapere og onlineradio-elskere av Daradics Levente",
  "sl": "Razvito z strastjo za ustvarjalce in ljubitelje spletnega radia s strani Daradicsa Leventea",
  "lt": "Sukurta su aistra kūrėjams ir internetinio radijo mėgėjams: Daradics Levente",
  "lv": "Izstrādāts ar kaislību radiotehniķiem un tiešsaistes radio mīļotājiem, autors Daradics Levente",
  "et": "Arendatud kirega tegijatele ja veebiraadio armastajatele Daradics Levente poolt",
  "sq": "Zhvilluar me pasion për krijuesit dhe dashamirët e radios online nga Daradics Levente",
  "is": "Þróað af ástríðu fyrir hönnuði og útvarpsáhugamenn á netinu af Daradics Levente",
  "sr": "Развијено са страшћу за креаторе и љубитеље онлајн радија од стране Дарадича Левентеа",
  "mk": "Развиено со страст за креатори и љубители на онлајн радио од Дарадич Левенте",
  "mt": "Żviluppat b'passjoni għall-kreaturi u d-dilettanti tar-radju online minn Daradics Levente",
  "ga": "Forbartha le paisean do chruthaitheoirí agus lucht leanúna raidió ar líne ag Daradics Levente",
  "bs": "Razvijeno s strasti za kreativce i ljubitelje online radija od strane Daradicsa Leventea",
  "be": "Распрацавана з прысутнасцю для мейкераў і аматараў анлайн-радыё Дарадзічам Левенам",
  "lb": "Mat Leidenschaft fir Maker an Online-Radio-Liebhaber entwéckelt vum Daradics Levente",
  "tr": "Üreticiler ve çevrimiçi radyo severler için tutkuyla geliştirilmiştir: Daradics Levente",
  "ru": "Разработано с любовью для мейкеров и любителей онлайн-радио Дарадичем Левенте",
  "ka": "შექმნილია ვნებით შემქმნelებისთვის და ონლაინ რადიოს მოყვარულთათვის Daradics Levente-ს მიერ",
  "tt": "Мейкерлар һәм онлайн радио сөючеләр өчен мавыгу белән ясалды Daradics Levente",
  "ba": "Ижадсылар һәм онлайн радио яратыусылар өсөн илһам менән эшләнде Daradics Levente",
  "ja": "メーカーやオンライン ラジオ愛好家のために情熱を込めて開発されました：Daradics Levente",
  "zh": "由 Daradics Levente 倾情为创客和网络广播爱好者开发",
  "ar": "طُوّر شغفاً بالمصممين وعشاق الراديو عبر الإنترنت بواسطة داراديكس ليفينتي",
  "hi": "मेकर्स और ऑनलाइन रेडियो प्रेमियों के लिए Daradics Levente द्वारा जुनून के साथ विकसित किया गया",
  "ko": "메이커와 온라인 라디오 애호가를 위해 Daradics Levente가 열정으로 개발했습니다.",
  "id": "Dikembangkan dengan penuh semangat untuk para *maker* dan pencinta radio online oleh Daradics Levente",
  "vi": "Được phát triển bằng2 sự đam mê dành cho những người sáng tạo và yêu thích radio trực tuyến bởi Daradics Levente",
  "sw": "Imetengenezwa kwa shauku kwa ajili ya wabunifu na wapenzi wa redio mtandaoni na Daradics Levente"
};

const localesDir = path.join(__dirname, 'locales');

if (!fs.existsSync(localesDir)) {
    console.error("Directorul 'locales/' nu a fost găsit!");
    process.exit(1);
}

fs.readdirSync(localesDir).forEach(file => {
    if (file.endsWith('.json') && file !== 'languages.json') {
        const langCode = path.basename(file, '.json');
        const filePath = path.join(localesDir, file);
        
        try {
            const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
            
            // Adăugăm sau actualizăm cheia
            content.footer_credits = creditsTranslations[langCode] || creditsTranslations['en'];
            
            fs.writeFileSync(filePath, JSON.stringify(content, null, 2), 'utf8');
            console.log(`Actualizat cu succes: ${file}`);
        } catch (err) {
            console.error(`Eroare la procesarea fișierului ${file}:`, err);
        }
    }
});

console.log("Toate fișierele de traducere au fost actualizate cu succes!");
