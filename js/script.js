const services = {

    samskara: {
        title: "Ṣoḍaśa Saṃskāras",
        description: "The sixteen traditional Hindu Saṃskāras performed according to Vedic traditions.",
        items: [
            "Garbhādhāna",
            "Puṃsavana",
            "Sīmantonnayana",
            "Jātakarma",
            "Nāmakaraṇa",
            "Niṣkramaṇa",
            "Annaprāśana",
            "Cūḍākaraṇa (Muṇḍana)",
            "Karṇavedha",
            "Vidyārambha",
            "Upanayana",
            "Vedārambha",
            "Keśānta",
            "Samāvartana",
            "Vivāha",
            "Antyeṣṭi"
        ]
    },

    yajna: {
        title: "Yajñas & Anuṣṭhānas",
        description: "Traditional Vedic Yajñas, Homas and Anuṣṭhānas performed according to scriptures.",
        items: [
            "Rudrābhiṣeka",
            "Mahāmṛtyuñjaya Anuṣṭhāna",
            "Navagraha Śānti",
            "Homa & Yajña",
            "Satyanārāyaṇa Kathā",
            "Prāṇa Pratiṣṭhā",
            "Other Vedic Anuṣṭhānas"
        ]
    },

    jyotisha: {
        title: "Jyotiṣa Consultation",
        description: "Traditional Vedic astrology guidance based on Jyotiṣa Śāstra.",
        items: [
            "Janma Kuṇḍalī Preparation",
            "Kuṇḍalī Phalādeśa",
            "Muhūrta Selection",
            "Marriage Compatibility",
            "General Consultation"
        ]
    },

    vastu: {
        title: "Vāstu Consultation",
        description: "Traditional Vāstu guidance for residential and commercial spaces.",
        items: [
            "Residential Vāstu",
            "Commercial Vāstu",
            "Plot Guidance",
            "Traditional Recommendations"
        ]
    },

    online: {
        title: "Online Consultation",
        description: "Online guidance is available for various Vedic services.",
        items: [
            "Ṣoḍaśa Saṃskāras Consultation",
            "Yajña & Anuṣṭhāna Guidance",
            "Jyotiṣa Consultation",
            "Vāstu Consultation",
            "General Vedic Guidance"
        ]
    },

    teaching: {
        title: "Vedic & Sanskrit Teaching",
        description: "Traditional teaching of Sanskrit and Vedic knowledge.",
        items: [
            "Sanskrit Learning",
            "Vedic Study for eligible students",
            "Vedic Recitation for eligible students",
            "Scriptural Guidance",
            "Traditional Knowledge"
        ]
    }

};


function openServiceModal(service){

    const data = services[service];
 
    document.getElementById("modalTitle").innerHTML = data.title;

    document.getElementById("modalDescription").innerHTML = data.description;


    let list = "";

    data.items.forEach(item => {
        list += `<li>${item}</li>`;
    });

    document.getElementById("modalList").innerHTML = list;
    console.log(list);


    document.getElementById("serviceModal").style.display="block";

}



function closeServiceModal(){

    document.getElementById("serviceModal").style.display="none";

}



window.onclick=function(event){

    const modal=document.getElementById("serviceModal");

    if(event.target==modal){

        modal.style.display="none";

    }

}