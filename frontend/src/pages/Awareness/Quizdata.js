// export const QuizData = [
//     {
//         question: "What equipment is used to record and measure earthquakes?",
//         options:[ "Seismometer", "Telescope", "Richter scale", "Flood Sensor"],
//         answer: 1
//     },
//     {
//         question: "What is the point on the ground vertically above the focus called?",
//         options:["Surface", "Main Center", "Epicenter", "Hypocenter"],
//         answer: 3
//     },
//     {
//         question: "What causes earthquake answer?",
//         options: ["When tectonic plates get stuck at their edges due to friction", "When the Earth stops spinning", "When Volcanoes start erupting", "When Landslides occur"],
//         answer: 1
//     },
//     {
//         question: "In case of an earthquake, what should we do if we are outdoors?",
//         options: ["Stand right under a building", "Stand below an electric pole", "Move to an open area away from buildings and trees", "Sit in a car"],
//         answer: 3
//     },
//     {
//         question: "What should we not do during an earthquake?",
//         options: ["Use elevators", "Stand under a tree", "Light matches or use open flames", "All of the above"],
//         answer: 4
//     },
// ];
export const QuizData = [
    {
      question_en: "What equipment is used to record and measure earthquakes?",
      question_hi: "भूकंप को रिकॉर्ड और मापने के लिए कौन सा उपकरण प्रयोग किया जाता है?",
      question_be: " ভূমিকম্প রেকর্ড ও পরিমাপ করতে কোন যন্ত্রপাতি ব্যবহার করা হয়?",
      options: [
        { text_en: "Seismometer", text_hi: "सीस्मोमीटर" , text_be: 'সিসমোমিটার'},
        { text_en: "Telescope", text_hi: "टेलीस्कोप",text_be: 'টেলিস্কোপ' },
        { text_en: "Richter scale", text_hi: "रिक्टर स्केल", text_be:'রিখটার স্কেল' },
        { text_en: "Flood Sensor", text_hi: "बाढ़ संवेदक" ,text_be: 'বন্যা সেন্সর'}
      ],
      answer: 1
    },
    {
        question_en: "What is the point on the ground vertically above the focus called?",
        question_hi: "फोकस के ठीक ऊपर जमीन पर स्थित बिंदु क्या कहलाता है?",
        question_be: "ফোকাস কে ঠিক উপরে জমিতে অবস্থান করা বিন্দু কি কহলতা?",
        options: [
          { text_en: "Surface", text_hi: "सतह" , text_be: 'পৃষ্ঠতল'},
          { text_en: "Main Center", text_hi: "मुख्य केंद्र",text_be: 'প্রধান কেন্দ্র' },
          { text_en: "Epicenter", text_hi: "उपरिकेंद्र", text_be:'উপকেন্দ্র' },
          { text_en: "Hypocenter", text_hi: "हाइपोसेंटर" ,text_be: 'হাইপোসেন্টার'}
        ],
        answer: 3
      },
      {
        question_en: "What causes earthquake occur?",
        question_hi: "भूकंप किस कारण आता है?",
        question_be: "কি কারণে ভূমিকম্প হয়?",
        options: [
          { text_en: "When tectonic plates get stuck at their edges due to friction", text_hi: "जब घर्षण के कारण टेक्टोनिक प्लेटें अपने किनारों पर अटक जाती हैं" , text_be: 'যখন টেকটোনিক প্লেটগুলি ঘর্ষণের কারণে তাদের প্রান্তে আটকে যায়'},
          { text_en: "When the Earth stops spinning", text_hi: "जब पृथ्वी घूमना बंद कर देती है",text_be: 'যখন পৃথিবী ঘোরানো বন্ধ করে দেয়' },
          { text_en: "When Volcanoes start erupting", text_hi: "जब ज्वालामुखी फटने लगते हैं", text_be:'যখন আগ্নেয়গিরি অগ্নুৎপাত শুরু করে' },
          { text_en: "When Landslides occur", text_hi: "जब भूस्खलन होता है" ,text_be: 'যখন ভূমিধস ঘটে'}
        ],
        answer: 1
      },
      {
        question_en: "In case of an earthquake, what should we do if we are outdoors?",
        question_hi: "भूकंप आने की स्थिति में, अगर हम बाहर हैं तो हमें क्या करना चाहिए?",
        question_be: "ভূমিকম্পের ক্ষেত্রে, আমরা বাইরে থাকলে আমাদের কী করা উচিত?",
        options: [
          { text_en: "Stand right under a building", text_hi: "किसी इमारत के ठीक नीचे खड़े हो जाओ" , text_be: 'একটা বিল্ডিংয়ের নিচে দাঁড়াও'},
          { text_en: "Stand below an electric pole", text_be: "বৈদ্যুতিক খুঁটির নিচে দাঁড়ান",text_hi: 'बिजली के खंभे के नीचे खड़े हो जाओ' },
          { text_en: "Move to an open area away from buildings and trees", text_hi: "इमारतों और पेड़ों से दूर किसी खुले क्षेत्र में चले जाएँ", text_be:'ভবন এবং গাছ থেকে দূরে একটি খোলা এলাকায় সরান' },
          { text_en: "Sit in a car", text_hi: "एक कार में बैठो" ,text_be: 'গাড়িতে বসুন'}
        ],
        answer: 3
      },
      {
        question_en: "What should we not do during an earthquake?",
        question_hi: "भूकंप के दौरान हमें क्या नहीं करना चाहिए?",
        question_be: "ভূমিকম্পের সময় আমাদের কী করা উচিত নয়?",
        options: [
          { text_en: "Use elevators", text_hi: "लिफ्ट का प्रयोग करें" , text_be: 'লিফট ব্যবহার করুন'},
          { text_en: "Stand under a tree", text_be: "একটা গাছের নিচে দাঁড়াও",text_hi: 'एक पेड़ के नीचे खड़े हो जाओ' },
          { text_en: "Light matches or use open flames", text_hi: "माचिस जलाएं या खुली लौ का उपयोग करें" ,text_be: 'হালকা মেলে বা খোলা শিখা ব্যবহার করুন'},
          { text_en: "All of the above", text_hi: "ऊपर के सभी", text_be:'উপরের সবগুলো' },
        ],
        answer: 4
      },
  ];