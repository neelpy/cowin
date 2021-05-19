const districts = [
  {
    "district_id": 582,
    "district_name": "Adilabad",
    "state_name": "Telangana",
    "state_id": 32
  },
  {
    "district_id": 320,
    "district_name": "Agar",
    "state_name": "Madhya Pradesh",
    "state_id": 20
  },
  {
    "district_id": 796,
    "district_name": "Agatti Island",
    "state_name": "Lakshadweep",
    "state_id": 19
  },
  {
    "district_id": 622,
    "district_name": "Agra",
    "state_name": "Uttar Pradesh",
    "state_id": 34
  },
  {
    "district_id": 154,
    "district_name": "Ahmedabad",
    "state_name": "Gujarat",
    "state_id": 11
  },
  {
    "district_id": 770,
    "district_name": "Ahmedabad Corporation",
    "state_name": "Gujarat",
    "state_id": 11
  },
  {
    "district_id": 391,
    "district_name": "Ahmednagar",
    "state_name": "Maharashtra",
    "state_id": 21
  },
  {
    "district_id": 425,
    "district_name": "Aizawl East",
    "state_name": "Mizoram",
    "state_id": 24
  },
  {
    "district_id": 426,
    "district_name": "Aizawl West",
    "state_name": "Mizoram",
    "state_id": 24
  },
  {
    "district_id": 507,
    "district_name": "Ajmer",
    "state_name": "Rajasthan",
    "state_id": 29
  },
  {
    "district_id": 364,
    "district_name": "Akola",
    "state_name": "Maharashtra",
    "state_id": 21
  },
  {
    "district_id": 301,
    "district_name": "Alappuzha",
    "state_name": "Kerala",
    "state_id": 17
  },
  {
    "district_id": 623,
    "district_name": "Aligarh",
    "state_name": "Uttar Pradesh",
    "state_id": 34
  },
  {
    "district_id": 710,
    "district_name": "Alipurduar District",
    "state_name": "West Bengal",
    "state_id": 36
  },
  {
    "district_id": 357,
    "district_name": "Alirajpur",
    "state_name": "Madhya Pradesh",
    "state_id": 20
  },
  {
    "district_id": 704,
    "district_name": "Almora",
    "state_name": "Uttarakhand",
    "state_id": 35
  },
  {
    "district_id": 512,
    "district_name": "Alwar",
    "state_name": "Rajasthan",
    "state_id": 29
  },
  {
    "district_id": 193,
    "district_name": "Ambala",
    "state_name": "Haryana",
    "state_id": 12
  },
  {
    "district_id": 625,
    "district_name": "Ambedkar Nagar",
    "state_name": "Uttar Pradesh",
    "state_id": 34
  },
  {
    "district_id": 626,
    "district_name": "Amethi",
    "state_name": "Uttar Pradesh",
    "state_id": 34
  },
  {
    "district_id": 366,
    "district_name": "Amravati",
    "state_name": "Maharashtra",
    "state_id": 21
  },
  {
    "district_id": 174,
    "district_name": "Amreli",
    "state_name": "Gujarat",
    "state_id": 11
  },
  {
    "district_id": 485,
    "district_name": "Amritsar",
    "state_name": "Punjab",
    "state_id": 28
  },
  {
    "district_id": 627,
    "district_name": "Amroha",
    "state_name": "Uttar Pradesh",
    "state_id": 34
  },
  {
    "district_id": 179,
    "district_name": "Anand",
    "state_name": "Gujarat",
    "state_id": 11
  },
  {
    "district_id": 9,
    "district_name": "Anantapur",
    "state_name": "Andhra Pradesh",
    "state_id": 2
  },
  {
    "district_id": 224,
    "district_name": "Anantnag",
    "state_name": "Jammu and Kashmir",
    "state_id": 14
  },
  {
    "district_id": 445,
    "district_name": "Angul",
    "state_name": "Odisha",
    "state_id": 26
  },
  {
    "district_id": 22,
    "district_name": "Anjaw",
    "state_name": "Arunachal Pradesh",
    "state_id": 3
  },
  {
    "district_id": 334,
    "district_name": "Anuppur",
    "state_name": "Madhya Pradesh",
    "state_id": 20
  },
  {
    "district_id": 779,
    "district_name": "Aranthangi",
    "state_name": "Tamil Nadu",
    "state_id": 31
  },
  {
    "district_id": 74,
    "district_name": "Araria",
    "state_name": "Bihar",
    "state_id": 5
  },
  {
    "district_id": 158,
    "district_name": "Aravalli",
    "state_name": "Gujarat",
    "state_id": 11
  },
  {
    "district_id": 555,
    "district_name": "Ariyalur",
    "state_name": "Tamil Nadu",
    "state_id": 31
  },
  {
    "district_id": 78,
    "district_name": "Arwal",
    "state_name": "Bihar",
    "state_id": 5
  },
  {
    "district_id": 354,
    "district_name": "Ashoknagar",
    "state_name": "Madhya Pradesh",
    "state_id": 20
  },
  {
    "district_id": 578,
    "district_name": "Attur",
    "state_name": "Tamil Nadu",
    "state_id": 31
  },
  {
    "district_id": 628,
    "district_name": "Auraiya",
    "state_name": "Uttar Pradesh",
    "state_id": 34
  },
  {
    "district_id": 77,
    "district_name": "Aurangabad",
    "state_name": "Bihar",
    "state_id": 5
  },
  {
    "district_id": 397,
    "district_name": "Aurangabad ",
    "state_name": "Maharashtra",
    "state_id": 21
  },
  {
    "district_id": 646,
    "district_name": "Ayodhya",
    "state_name": "Uttar Pradesh",
    "state_id": 34
  },
  {
    "district_id": 629,
    "district_name": "Azamgarh",
    "state_name": "Uttar Pradesh",
    "state_id": 34
  },
  {
    "district_id": 630,
    "district_name": "Badaun",
    "state_name": "Uttar Pradesh",
    "state_id": 34
  },
  {
    "district_id": 270,
    "district_name": "Bagalkot",
    "state_name": "Karnataka",
    "state_id": 16
  },
  {
    "district_id": 707,
    "district_name": "Bageshwar",
    "state_name": "Uttarakhand",
    "state_id": 35
  },
  {
    "district_id": 631,
    "district_name": "Baghpat",
    "state_name": "Uttar Pradesh",
    "state_id": 34
  },
  {
    "district_id": 632,
    "district_name": "Bahraich",
    "state_name": "Uttar Pradesh",
    "state_id": 34
  },
  {
    "district_id": 46,
    "district_name": "Baksa",
    "state_name": "Assam",
    "state_id": 4
  },
  {
    "district_id": 338,
    "district_name": "Balaghat",
    "state_name": "Madhya Pradesh",
    "state_id": 20
  },
  {
    "district_id": 448,
    "district_name": "Balangir",
    "state_name": "Odisha",
    "state_id": 26
  },
  {
    "district_id": 633,
    "district_name": "Balarampur",
    "state_name": "Uttar Pradesh",
    "state_id": 34
  },
  {
    "district_id": 447,
    "district_name": "Balasore",
    "state_name": "Odisha",
    "state_id": 26
  },
  {
    "district_id": 634,
    "district_name": "Ballia",
    "state_name": "Uttar Pradesh",
    "state_id": 34
  },
  {
    "district_id": 110,
    "district_name": "Balod",
    "state_name": "Chhattisgarh",
    "state_id": 7
  },
  {
    "district_id": 111,
    "district_name": "Baloda bazar",
    "state_name": "Chhattisgarh",
    "state_id": 7
  },
  {
    "district_id": 112,
    "district_name": "Balrampur",
    "state_name": "Chhattisgarh",
    "state_id": 7
  },
  {
    "district_id": 159,
    "district_name": "Banaskantha",
    "state_name": "Gujarat",
    "state_id": 11
  },
  {
    "district_id": 635,
    "district_name": "Banda",
    "state_name": "Uttar Pradesh",
    "state_id": 34
  },
  {
    "district_id": 223,
    "district_name": "Bandipore",
    "state_name": "Jammu and Kashmir",
    "state_id": 14
  },
  {
    "district_id": 276,
    "district_name": "Bangalore Rural",
    "state_name": "Karnataka",
    "state_id": 16
  },
  {
    "district_id": 265,
    "district_name": "Bangalore Urban",
    "state_name": "Karnataka",
    "state_id": 16
  },
  {
    "district_id": 83,
    "district_name": "Banka",
    "state_name": "Bihar",
    "state_id": 5
  },
  {
    "district_id": 711,
    "district_name": "Bankura",
    "state_name": "West Bengal",
    "state_id": 36
  },
  {
    "district_id": 519,
    "district_name": "Banswara",
    "state_name": "Rajasthan",
    "state_id": 29
  },
  {
    "district_id": 636,
    "district_name": "Barabanki",
    "state_name": "Uttar Pradesh",
    "state_id": 34
  },
  {
    "district_id": 225,
    "district_name": "Baramulla",
    "state_name": "Jammu and Kashmir",
    "state_id": 14
  },
  {
    "district_id": 516,
    "district_name": "Baran",
    "state_name": "Rajasthan",
    "state_id": 29
  },
  {
    "district_id": 637,
    "district_name": "Bareilly",
    "state_name": "Uttar Pradesh",
    "state_id": 34
  },
  {
    "district_id": 472,
    "district_name": "Bargarh",
    "state_name": "Odisha",
    "state_id": 26
  },
  {
    "district_id": 528,
    "district_name": "Barmer",
    "state_name": "Rajasthan",
    "state_id": 29
  },
  {
    "district_id": 483,
    "district_name": "Barnala",
    "state_name": "Punjab",
    "state_id": 28
  },
  {
    "district_id": 47,
    "district_name": "Barpeta",
    "state_name": "Assam",
    "state_id": 4
  },
  {
    "district_id": 343,
    "district_name": "Barwani",
    "state_name": "Madhya Pradesh",
    "state_id": 20
  },
  {
    "district_id": 712,
    "district_name": "Basirhat HD (North 24 Parganas)",
    "state_name": "West Bengal",
    "state_id": 36
  },
  {
    "district_id": 113,
    "district_name": "Bastar",
    "state_name": "Chhattisgarh",
    "state_id": 7
  },
  {
    "district_id": 638,
    "district_name": "Basti",
    "state_name": "Uttar Pradesh",
    "state_id": 34
  },
  {
    "district_id": 493,
    "district_name": "Bathinda",
    "state_name": "Punjab",
    "state_id": 28
  },
  {
    "district_id": 294,
    "district_name": "BBMP",
    "state_name": "Karnataka",
    "state_id": 16
  },
  {
    "district_id": 384,
    "district_name": "Beed",
    "state_name": "Maharashtra",
    "state_id": 21
  },
  {
    "district_id": 98,
    "district_name": "Begusarai",
    "state_name": "Bihar",
    "state_id": 5
  },
  {
    "district_id": 264,
    "district_name": "Belgaum",
    "state_name": "Karnataka",
    "state_id": 16
  },
  {
    "district_id": 274,
    "district_name": "Bellary",
    "state_name": "Karnataka",
    "state_id": 16
  },
  {
    "district_id": 114,
    "district_name": "Bemetara",
    "state_name": "Chhattisgarh",
    "state_id": 7
  },
  {
    "district_id": 362,
    "district_name": "Betul",
    "state_name": "Madhya Pradesh",
    "state_id": 20
  },
  {
    "district_id": 687,
    "district_name": "Bhadohi",
    "state_name": "Uttar Pradesh",
    "state_id": 34
  },
  {
    "district_id": 583,
    "district_name": "Bhadradri Kothagudem",
    "state_name": "Telangana",
    "state_id": 32
  },
  {
    "district_id": 454,
    "district_name": "Bhadrak",
    "state_name": "Odisha",
    "state_id": 26
  },
  {
    "district_id": 82,
    "district_name": "Bhagalpur",
    "state_name": "Bihar",
    "state_id": 5
  },
  {
    "district_id": 370,
    "district_name": "Bhandara",
    "state_name": "Maharashtra",
    "state_id": 21
  },
  {
    "district_id": 508,
    "district_name": "Bharatpur",
    "state_name": "Rajasthan",
    "state_id": 29
  },
  {
    "district_id": 180,
    "district_name": "Bharuch",
    "state_name": "Gujarat",
    "state_id": 11
  },
  {
    "district_id": 175,
    "district_name": "Bhavnagar",
    "state_name": "Gujarat",
    "state_id": 11
  },
  {
    "district_id": 771,
    "district_name": "Bhavnagar Corporation",
    "state_name": "Gujarat",
    "state_id": 11
  },
  {
    "district_id": 523,
    "district_name": "Bhilwara",
    "state_name": "Rajasthan",
    "state_id": 29
  },
  {
    "district_id": 351,
    "district_name": "Bhind",
    "state_name": "Madhya Pradesh",
    "state_id": 20
  },
  {
    "district_id": 200,
    "district_name": "Bhiwani",
    "state_name": "Haryana",
    "state_id": 12
  },
  {
    "district_id": 99,
    "district_name": "Bhojpur",
    "state_name": "Bihar",
    "state_id": 5
  },
  {
    "district_id": 312,
    "district_name": "Bhopal",
    "state_name": "Madhya Pradesh",
    "state_id": 20
  },
  {
    "district_id": 272,
    "district_name": "Bidar",
    "state_name": "Karnataka",
    "state_id": 16
  },
  {
    "district_id": 115,
    "district_name": "Bijapur",
    "state_name": "Chhattisgarh",
    "state_id": 7
  },
  {
    "district_id": 639,
    "district_name": "Bijnour",
    "state_name": "Uttar Pradesh",
    "state_id": 34
  },
  {
    "district_id": 501,
    "district_name": "Bikaner",
    "state_name": "Rajasthan",
    "state_id": 29
  },
  {
    "district_id": 116,
    "district_name": "Bilaspur",
    "state_name": "Chhattisgarh",
    "state_id": 7
  },
  {
    "district_id": 219,
    "district_name": "Bilaspur",
    "state_name": "Himachal Pradesh",
    "state_id": 13
  },
  {
    "district_id": 713,
    "district_name": "Birbhum",
    "state_name": "West Bengal",
    "state_id": 36
  },
  {
    "district_id": 398,
    "district_name": "Bishnupur",
    "state_name": "Manipur",
    "state_id": 22
  },
  {
    "district_id": 714,
    "district_name": "Bishnupur HD (Bankura)",
    "state_name": "West Bengal",
    "state_id": 36
  },
  {
    "district_id": 765,
    "district_name": "Biswanath",
    "state_name": "Assam",
    "state_id": 4
  },
  {
    "district_id": 242,
    "district_name": "Bokaro",
    "state_name": "Jharkhand",
    "state_id": 15
  },
  {
    "district_id": 57,
    "district_name": "Bongaigaon",
    "state_name": "Assam",
    "state_id": 4
  },
  {
    "district_id": 176,
    "district_name": "Botad",
    "state_name": "Gujarat",
    "state_id": 11
  },
  {
    "district_id": 468,
    "district_name": "Boudh",
    "state_name": "Odisha",
    "state_id": 26
  },
  {
    "district_id": 229,
    "district_name": "Budgam",
    "state_name": "Jammu and Kashmir",
    "state_id": 14
  },
  {
    "district_id": 640,
    "district_name": "Bulandshahr",
    "state_name": "Uttar Pradesh",
    "state_id": 34
  },
  {
    "district_id": 367,
    "district_name": "Buldhana",
    "state_name": "Maharashtra",
    "state_id": 21
  },
  {
    "district_id": 514,
    "district_name": "Bundi",
    "state_name": "Rajasthan",
    "state_id": 29
  },
  {
    "district_id": 342,
    "district_name": "Burhanpur",
    "state_name": "Madhya Pradesh",
    "state_id": 20
  },
  {
    "district_id": 100,
    "district_name": "Buxar",
    "state_name": "Bihar",
    "state_id": 5
  },
  {
    "district_id": 66,
    "district_name": "Cachar",
    "state_name": "Assam",
    "state_id": 4
  },
  {
    "district_id": 141,
    "district_name": "Central Delhi",
    "state_name": "Delhi",
    "state_id": 9
  },
  {
    "district_id": 271,
    "district_name": "Chamarajanagar",
    "state_name": "Karnataka",
    "state_id": 16
  },
  {
    "district_id": 214,
    "district_name": "Chamba",
    "state_name": "Himachal Pradesh",
    "state_id": 13
  },
  {
    "district_id": 699,
    "district_name": "Chamoli",
    "state_name": "Uttarakhand",
    "state_id": 35
  },
  {
    "district_id": 708,
    "district_name": "Champawat",
    "state_name": "Uttarakhand",
    "state_id": 35
  },
  {
    "district_id": 429,
    "district_name": "Champhai",
    "state_name": "Mizoram",
    "state_id": 24
  },
  {
    "district_id": 641,
    "district_name": "Chandauli",
    "state_name": "Uttar Pradesh",
    "state_id": 34
  },
  {
    "district_id": 399,
    "district_name": "Chandel",
    "state_name": "Manipur",
    "state_id": 22
  },
  {
    "district_id": 108,
    "district_name": "Chandigarh",
    "state_name": "Chandigarh",
    "state_id": 6
  },
  {
    "district_id": 380,
    "district_name": "Chandrapur",
    "state_name": "Maharashtra",
    "state_id": 21
  },
  {
    "district_id": 20,
    "district_name": "Changlang",
    "state_name": "Arunachal Pradesh",
    "state_id": 3
  },
  {
    "district_id": 766,
    "district_name": "Charaideo",
    "state_name": "Assam",
    "state_id": 4
  },
  {
    "district_id": 201,
    "district_name": "Charkhi Dadri",
    "state_name": "Haryana",
    "state_id": 12
  },
  {
    "district_id": 245,
    "district_name": "Chatra",
    "state_name": "Jharkhand",
    "state_id": 15
  },
  {
    "district_id": 565,
    "district_name": "Chengalpet",
    "state_name": "Tamil Nadu",
    "state_id": 31
  },
  {
    "district_id": 571,
    "district_name": "Chennai",
    "state_name": "Tamil Nadu",
    "state_id": 31
  },
  {
    "district_id": 778,
    "district_name": "Cheyyar",
    "state_name": "Tamil Nadu",
    "state_id": 31
  },
  {
    "district_id": 328,
    "district_name": "Chhatarpur",
    "state_name": "Madhya Pradesh",
    "state_id": 20
  },
  {
    "district_id": 337,
    "district_name": "Chhindwara",
    "state_name": "Madhya Pradesh",
    "state_id": 20
  },
  {
    "district_id": 181,
    "district_name": "Chhotaudepur",
    "state_name": "Gujarat",
    "state_id": 11
  },
  {
    "district_id": 273,
    "district_name": "Chikamagalur",
    "state_name": "Karnataka",
    "state_id": 16
  },
  {
    "district_id": 291,
    "district_name": "Chikkaballapur",
    "state_name": "Karnataka",
    "state_id": 16
  },
  {
    "district_id": 58,
    "district_name": "Chirang",
    "state_name": "Assam",
    "state_id": 4
  },
  {
    "district_id": 268,
    "district_name": "Chitradurga",
    "state_name": "Karnataka",
    "state_id": 16
  },
  {
    "district_id": 642,
    "district_name": "Chitrakoot",
    "state_name": "Uttar Pradesh",
    "state_id": 34
  },
  {
    "district_id": 10,
    "district_name": "Chittoor",
    "state_name": "Andhra Pradesh",
    "state_id": 2
  },
  {
    "district_id": 521,
    "district_name": "Chittorgarh",
    "state_name": "Rajasthan",
    "state_id": 29
  },
  {
    "district_id": 400,
    "district_name": "Churachandpur",
    "state_name": "Manipur",
    "state_id": 22
  },
  {
    "district_id": 530,
    "district_name": "Churu",
    "state_name": "Rajasthan",
    "state_id": 29
  },
  {
    "district_id": 539,
    "district_name": "Coimbatore",
    "state_name": "Tamil Nadu",
    "state_id": 31
  },
  {
    "district_id": 715,
    "district_name": "Cooch Behar",
    "state_name": "West Bengal",
    "state_id": 36
  },
  {
    "district_id": 783,
    "district_name": "COOCHBEHAR",
    "state_name": "West Bengal",
    "state_id": 36
  },
  {
    "district_id": 547,
    "district_name": "Cuddalore",
    "state_name": "Tamil Nadu",
    "state_id": 31
  },
  {
    "district_id": 457,
    "district_name": "Cuttack",
    "state_name": "Odisha",
    "state_id": 26
  },
  {
    "district_id": 137,
    "district_name": "Dadra and Nagar Haveli",
    "state_name": "Dadra and Nagar Haveli",
    "state_id": 8
  },
  {
    "district_id": 182,
    "district_name": "Dahod",
    "state_name": "Gujarat",
    "state_id": 11
  },
  {
    "district_id": 716,
    "district_name": "Dakshin Dinajpur",
    "state_name": "West Bengal",
    "state_id": 36
  },
  {
    "district_id": 269,
    "district_name": "Dakshina Kannada",
    "state_name": "Karnataka",
    "state_id": 16
  },
  {
    "district_id": 138,
    "district_name": "Daman",
    "state_name": "Daman and Diu",
    "state_id": 37
  },
  {
    "district_id": 327,
    "district_name": "Damoh",
    "state_name": "Madhya Pradesh",
    "state_id": 20
  },
  {
    "district_id": 163,
    "district_name": "Dang",
    "state_name": "Gujarat",
    "state_id": 11
  },
  {
    "district_id": 117,
    "district_name": "Dantewada",
    "state_name": "Chhattisgarh",
    "state_id": 7
  },
  {
    "district_id": 94,
    "district_name": "Darbhanga",
    "state_name": "Bihar",
    "state_id": 5
  },
  {
    "district_id": 717,
    "district_name": "Darjeeling",
    "state_name": "West Bengal",
    "state_id": 36
  },
  {
    "district_id": 48,
    "district_name": "Darrang",
    "state_name": "Assam",
    "state_id": 4
  },
  {
    "district_id": 350,
    "district_name": "Datia",
    "state_name": "Madhya Pradesh",
    "state_id": 20
  },
  {
    "district_id": 511,
    "district_name": "Dausa",
    "state_name": "Rajasthan",
    "state_id": 29
  },
  {
    "district_id": 275,
    "district_name": "Davanagere",
    "state_name": "Karnataka",
    "state_id": 16
  },
  {
    "district_id": 697,
    "district_name": "Dehradun",
    "state_name": "Uttarakhand",
    "state_id": 35
  },
  {
    "district_id": 473,
    "district_name": "Deogarh",
    "state_name": "Odisha",
    "state_id": 26
  },
  {
    "district_id": 253,
    "district_name": "Deoghar",
    "state_name": "Jharkhand",
    "state_id": 15
  },
  {
    "district_id": 643,
    "district_name": "Deoria",
    "state_name": "Uttar Pradesh",
    "state_id": 34
  },
  {
    "district_id": 168,
    "district_name": "Devbhumi Dwaraka",
    "state_name": "Gujarat",
    "state_id": 11
  },
  {
    "district_id": 324,
    "district_name": "Dewas",
    "state_name": "Madhya Pradesh",
    "state_id": 20
  },
  {
    "district_id": 614,
    "district_name": "Dhalai",
    "state_name": "Tripura",
    "state_id": 33
  },
  {
    "district_id": 118,
    "district_name": "Dhamtari",
    "state_name": "Chhattisgarh",
    "state_id": 7
  },
  {
    "district_id": 257,
    "district_name": "Dhanbad",
    "state_name": "Jharkhand",
    "state_id": 15
  },
  {
    "district_id": 341,
    "district_name": "Dhar",
    "state_name": "Madhya Pradesh",
    "state_id": 20
  },
  {
    "district_id": 566,
    "district_name": "Dharmapuri",
    "state_name": "Tamil Nadu",
    "state_id": 31
  },
  {
    "district_id": 278,
    "district_name": "Dharwad",
    "state_name": "Karnataka",
    "state_id": 16
  },
  {
    "district_id": 62,
    "district_name": "Dhemaji",
    "state_name": "Assam",
    "state_id": 4
  },
  {
    "district_id": 458,
    "district_name": "Dhenkanal",
    "state_name": "Odisha",
    "state_id": 26
  },
  {
    "district_id": 524,
    "district_name": "Dholpur",
    "state_name": "Rajasthan",
    "state_id": 29
  },
  {
    "district_id": 59,
    "district_name": "Dhubri",
    "state_name": "Assam",
    "state_id": 4
  },
  {
    "district_id": 388,
    "district_name": "Dhule",
    "state_name": "Maharashtra",
    "state_id": 21
  },
  {
    "district_id": 718,
    "district_name": "Diamond Harbor HD (S 24 Parganas)",
    "state_name": "West Bengal",
    "state_id": 36
  },
  {
    "district_id": 25,
    "district_name": "Dibang Valley",
    "state_name": "Arunachal Pradesh",
    "state_id": 3
  },
  {
    "district_id": 43,
    "district_name": "Dibrugarh",
    "state_name": "Assam",
    "state_id": 4
  },
  {
    "district_id": 67,
    "district_name": "Dima Hasao",
    "state_name": "Assam",
    "state_id": 4
  },
  {
    "district_id": 434,
    "district_name": "Dimapur",
    "state_name": "Nagaland",
    "state_id": 25
  },
  {
    "district_id": 556,
    "district_name": "Dindigul",
    "state_name": "Tamil Nadu",
    "state_id": 31
  },
  {
    "district_id": 336,
    "district_name": "Dindori",
    "state_name": "Madhya Pradesh",
    "state_id": 20
  },
  {
    "district_id": 139,
    "district_name": "Diu",
    "state_name": "Daman and Diu",
    "state_id": 37
  },
  {
    "district_id": 232,
    "district_name": "Doda",
    "state_name": "Jammu and Kashmir",
    "state_id": 14
  },
  {
    "district_id": 258,
    "district_name": "Dumka",
    "state_name": "Jharkhand",
    "state_id": 15
  },
  {
    "district_id": 520,
    "district_name": "Dungarpur",
    "state_name": "Rajasthan",
    "state_id": 29
  },
  {
    "district_id": 119,
    "district_name": "Durg",
    "state_name": "Chhattisgarh",
    "state_id": 7
  },
  {
    "district_id": 719,
    "district_name": "East Bardhaman",
    "state_name": "West Bengal",
    "state_id": 36
  },
  {
    "district_id": 105,
    "district_name": "East Champaran",
    "state_name": "Bihar",
    "state_id": 5
  },
  {
    "district_id": 145,
    "district_name": "East Delhi",
    "state_name": "Delhi",
    "state_id": 9
  },
  {
    "district_id": 424,
    "district_name": "East Garo Hills",
    "state_name": "Meghalaya",
    "state_id": 23
  },
  {
    "district_id": 11,
    "district_name": "East Godavari",
    "state_name": "Andhra Pradesh",
    "state_id": 2
  },
  {
    "district_id": 418,
    "district_name": "East Jaintia Hills",
    "state_name": "Meghalaya",
    "state_id": 23
  },
  {
    "district_id": 23,
    "district_name": "East Kameng",
    "state_name": "Arunachal Pradesh",
    "state_id": 3
  },
  {
    "district_id": 414,
    "district_name": "East Khasi Hills",
    "state_name": "Meghalaya",
    "state_id": 23
  },
  {
    "district_id": 42,
    "district_name": "East Siang",
    "state_name": "Arunachal Pradesh",
    "state_id": 3
  },
  {
    "district_id": 535,
    "district_name": "East Sikkim",
    "state_name": "Sikkim",
    "state_id": 30
  },
  {
    "district_id": 247,
    "district_name": "East Singhbhum",
    "state_name": "Jharkhand",
    "state_id": 15
  },
  {
    "district_id": 307,
    "district_name": "Ernakulam",
    "state_name": "Kerala",
    "state_id": 17
  },
  {
    "district_id": 563,
    "district_name": "Erode",
    "state_name": "Tamil Nadu",
    "state_id": 31
  },
  {
    "district_id": 644,
    "district_name": "Etah",
    "state_name": "Uttar Pradesh",
    "state_id": 34
  },
  {
    "district_id": 645,
    "district_name": "Etawah",
    "state_name": "Uttar Pradesh",
    "state_id": 34
  },
  {
    "district_id": 199,
    "district_name": "Faridabad",
    "state_name": "Haryana",
    "state_id": 12
  },
  {
    "district_id": 499,
    "district_name": "Faridkot",
    "state_name": "Punjab",
    "state_id": 28
  },
  {
    "district_id": 647,
    "district_name": "Farrukhabad",
    "state_name": "Uttar Pradesh",
    "state_id": 34
  },
  {
    "district_id": 196,
    "district_name": "Fatehabad",
    "state_name": "Haryana",
    "state_id": 12
  },
  {
    "district_id": 484,
    "district_name": "Fatehgarh Sahib",
    "state_name": "Punjab",
    "state_id": 28
  },
  {
    "district_id": 648,
    "district_name": "Fatehpur",
    "state_name": "Uttar Pradesh",
    "state_id": 34
  },
  {
    "district_id": 487,
    "district_name": "Fazilka",
    "state_name": "Punjab",
    "state_id": 28
  },
  {
    "district_id": 480,
    "district_name": "Ferozpur",
    "state_name": "Punjab",
    "state_id": 28
  },
  {
    "district_id": 649,
    "district_name": "Firozabad",
    "state_name": "Uttar Pradesh",
    "state_id": 34
  },
  {
    "district_id": 280,
    "district_name": "Gadag",
    "state_name": "Karnataka",
    "state_id": 16
  },
  {
    "district_id": 379,
    "district_name": "Gadchiroli",
    "state_name": "Maharashtra",
    "state_id": 21
  },
  {
    "district_id": 467,
    "district_name": "Gajapati",
    "state_name": "Odisha",
    "state_id": 26
  },
  {
    "district_id": 228,
    "district_name": "Ganderbal",
    "state_name": "Jammu and Kashmir",
    "state_id": 14
  },
  {
    "district_id": 153,
    "district_name": "Gandhinagar",
    "state_name": "Gujarat",
    "state_id": 11
  },
  {
    "district_id": 772,
    "district_name": "Gandhinagar Corporation",
    "state_name": "Gujarat",
    "state_id": 11
  },
  {
    "district_id": 449,
    "district_name": "Ganjam",
    "state_name": "Odisha",
    "state_id": 26
  },
  {
    "district_id": 243,
    "district_name": "Garhwa",
    "state_name": "Jharkhand",
    "state_id": 15
  },
  {
    "district_id": 120,
    "district_name": "Gariaband",
    "state_name": "Chhattisgarh",
    "state_id": 7
  },
  {
    "district_id": 136,
    "district_name": "Gaurela Pendra Marwahi ",
    "state_name": "Chhattisgarh",
    "state_id": 7
  },
  {
    "district_id": 650,
    "district_name": "Gautam Buddha Nagar",
    "state_name": "Uttar Pradesh",
    "state_id": 34
  },
  {
    "district_id": 79,
    "district_name": "Gaya",
    "state_name": "Bihar",
    "state_id": 5
  },
  {
    "district_id": 651,
    "district_name": "Ghaziabad",
    "state_name": "Uttar Pradesh",
    "state_id": 34
  },
  {
    "district_id": 652,
    "district_name": "Ghazipur",
    "state_name": "Uttar Pradesh",
    "state_id": 34
  },
  {
    "district_id": 177,
    "district_name": "Gir Somnath",
    "state_name": "Gujarat",
    "state_id": 11
  },
  {
    "district_id": 256,
    "district_name": "Giridih",
    "state_name": "Jharkhand",
    "state_id": 15
  },
  {
    "district_id": 60,
    "district_name": "Goalpara",
    "state_name": "Assam",
    "state_id": 4
  },
  {
    "district_id": 262,
    "district_name": "Godda",
    "state_name": "Jharkhand",
    "state_id": 15
  },
  {
    "district_id": 53,
    "district_name": "Golaghat",
    "state_name": "Assam",
    "state_id": 4
  },
  {
    "district_id": 615,
    "district_name": "Gomati",
    "state_name": "Tripura",
    "state_id": 33
  },
  {
    "district_id": 653,
    "district_name": "Gonda",
    "state_name": "Uttar Pradesh",
    "state_id": 34
  },
  {
    "district_id": 378,
    "district_name": "Gondia",
    "state_name": "Maharashtra",
    "state_id": 21
  },
  {
    "district_id": 104,
    "district_name": "Gopalganj",
    "state_name": "Bihar",
    "state_id": 5
  },
  {
    "district_id": 654,
    "district_name": "Gorakhpur",
    "state_name": "Uttar Pradesh",
    "state_id": 34
  },
  {
    "district_id": 267,
    "district_name": "Gulbarga",
    "state_name": "Karnataka",
    "state_id": 16
  },
  {
    "district_id": 251,
    "district_name": "Gumla",
    "state_name": "Jharkhand",
    "state_id": 15
  },
  {
    "district_id": 348,
    "district_name": "Guna",
    "state_name": "Madhya Pradesh",
    "state_id": 20
  },
  {
    "district_id": 5,
    "district_name": "Guntur",
    "state_name": "Andhra Pradesh",
    "state_id": 2
  },
  {
    "district_id": 489,
    "district_name": "Gurdaspur",
    "state_name": "Punjab",
    "state_id": 28
  },
  {
    "district_id": 188,
    "district_name": "Gurgaon",
    "state_name": "Haryana",
    "state_id": 12
  },
  {
    "district_id": 313,
    "district_name": "Gwalior",
    "state_name": "Madhya Pradesh",
    "state_id": 20
  },
  {
    "district_id": 68,
    "district_name": "Hailakandi",
    "state_name": "Assam",
    "state_id": 4
  },
  {
    "district_id": 217,
    "district_name": "Hamirpur",
    "state_name": "Himachal Pradesh",
    "state_id": 13
  },
  {
    "district_id": 655,
    "district_name": "Hamirpur",
    "state_name": "Uttar Pradesh",
    "state_id": 34
  },
  {
    "district_id": 517,
    "district_name": "Hanumangarh",
    "state_name": "Rajasthan",
    "state_id": 29
  },
  {
    "district_id": 656,
    "district_name": "Hapur",
    "state_name": "Uttar Pradesh",
    "state_id": 34
  },
  {
    "district_id": 361,
    "district_name": "Harda",
    "state_name": "Madhya Pradesh",
    "state_id": 20
  },
  {
    "district_id": 657,
    "district_name": "Hardoi",
    "state_name": "Uttar Pradesh",
    "state_id": 34
  },
  {
    "district_id": 702,
    "district_name": "Haridwar",
    "state_name": "Uttarakhand",
    "state_id": 35
  },
  {
    "district_id": 289,
    "district_name": "Hassan",
    "state_name": "Karnataka",
    "state_id": 16
  },
  {
    "district_id": 658,
    "district_name": "Hathras",
    "state_name": "Uttar Pradesh",
    "state_id": 34
  },
  {
    "district_id": 279,
    "district_name": "Haveri",
    "state_name": "Karnataka",
    "state_id": 16
  },
  {
    "district_id": 255,
    "district_name": "Hazaribagh",
    "state_name": "Jharkhand",
    "state_id": 15
  },
  {
    "district_id": 386,
    "district_name": "Hingoli",
    "state_name": "Maharashtra",
    "state_id": 21
  },
  {
    "district_id": 191,
    "district_name": "Hisar",
    "state_name": "Haryana",
    "state_id": 12
  },
  {
    "district_id": 764,
    "district_name": "Hojai",
    "state_name": "Assam",
    "state_id": 4
  },
  {
    "district_id": 720,
    "district_name": "Hoogly",
    "state_name": "West Bengal",
    "state_id": 36
  },
  {
    "district_id": 360,
    "district_name": "Hoshangabad",
    "state_name": "Madhya Pradesh",
    "state_id": 20
  },
  {
    "district_id": 481,
    "district_name": "Hoshiarpur",
    "state_name": "Punjab",
    "state_id": 28
  },
  {
    "district_id": 721,
    "district_name": "Howrah",
    "state_name": "West Bengal",
    "state_id": 36
  },
  {
    "district_id": 581,
    "district_name": "Hyderabad",
    "state_name": "Telangana",
    "state_id": 32
  },
  {
    "district_id": 306,
    "district_name": "Idukki",
    "state_name": "Kerala",
    "state_id": 17
  },
  {
    "district_id": 401,
    "district_name": "Imphal East",
    "state_name": "Manipur",
    "state_id": 22
  },
  {
    "district_id": 402,
    "district_name": "Imphal West",
    "state_name": "Manipur",
    "state_id": 22
  },
  {
    "district_id": 314,
    "district_name": "Indore",
    "state_name": "Madhya Pradesh",
    "state_id": 20
  },
  {
    "district_id": 17,
    "district_name": "Itanagar Capital Complex",
    "state_name": "Arunachal Pradesh",
    "state_id": 3
  },
  {
    "district_id": 315,
    "district_name": "Jabalpur",
    "state_name": "Madhya Pradesh",
    "state_id": 20
  },
  {
    "district_id": 459,
    "district_name": "Jagatsinghpur",
    "state_name": "Odisha",
    "state_id": 26
  },
  {
    "district_id": 584,
    "district_name": "Jagtial",
    "state_name": "Telangana",
    "state_id": 32
  },
  {
    "district_id": 505,
    "district_name": "Jaipur I",
    "state_name": "Rajasthan",
    "state_id": 29
  },
  {
    "district_id": 506,
    "district_name": "Jaipur II",
    "state_name": "Rajasthan",
    "state_id": 29
  },
  {
    "district_id": 527,
    "district_name": "Jaisalmer",
    "state_name": "Rajasthan",
    "state_id": 29
  },
  {
    "district_id": 460,
    "district_name": "Jajpur",
    "state_name": "Odisha",
    "state_id": 26
  },
  {
    "district_id": 492,
    "district_name": "Jalandhar",
    "state_name": "Punjab",
    "state_id": 28
  },
  {
    "district_id": 659,
    "district_name": "Jalaun",
    "state_name": "Uttar Pradesh",
    "state_id": 34
  },
  {
    "district_id": 390,
    "district_name": "Jalgaon",
    "state_name": "Maharashtra",
    "state_id": 21
  },
  {
    "district_id": 396,
    "district_name": "Jalna",
    "state_name": "Maharashtra",
    "state_id": 21
  },
  {
    "district_id": 533,
    "district_name": "Jalore",
    "state_name": "Rajasthan",
    "state_id": 29
  },
  {
    "district_id": 722,
    "district_name": "Jalpaiguri",
    "state_name": "West Bengal",
    "state_id": 36
  },
  {
    "district_id": 230,
    "district_name": "Jammu",
    "state_name": "Jammu and Kashmir",
    "state_id": 14
  },
  {
    "district_id": 169,
    "district_name": "Jamnagar",
    "state_name": "Gujarat",
    "state_id": 11
  },
  {
    "district_id": 773,
    "district_name": "Jamnagar Corporation",
    "state_name": "Gujarat",
    "state_id": 11
  },
  {
    "district_id": 259,
    "district_name": "Jamtara",
    "state_name": "Jharkhand",
    "state_id": 15
  },
  {
    "district_id": 107,
    "district_name": "Jamui",
    "state_name": "Bihar",
    "state_id": 5
  },
  {
    "district_id": 585,
    "district_name": "Jangaon",
    "state_name": "Telangana",
    "state_id": 32
  },
  {
    "district_id": 121,
    "district_name": "Janjgir-Champa",
    "state_name": "Chhattisgarh",
    "state_id": 7
  },
  {
    "district_id": 122,
    "district_name": "Jashpur",
    "state_name": "Chhattisgarh",
    "state_id": 7
  },
  {
    "district_id": 660,
    "district_name": "Jaunpur",
    "state_name": "Uttar Pradesh",
    "state_id": 34
  },
  {
    "district_id": 586,
    "district_name": "Jayashankar Bhupalpally",
    "state_name": "Telangana",
    "state_id": 32
  },
  {
    "district_id": 91,
    "district_name": "Jehanabad",
    "state_name": "Bihar",
    "state_id": 5
  },
  {
    "district_id": 340,
    "district_name": "Jhabua",
    "state_name": "Madhya Pradesh",
    "state_id": 20
  },
  {
    "district_id": 189,
    "district_name": "Jhajjar",
    "state_name": "Haryana",
    "state_id": 12
  },
  {
    "district_id": 515,
    "district_name": "Jhalawar",
    "state_name": "Rajasthan",
    "state_id": 29
  },
  {
    "district_id": 661,
    "district_name": "Jhansi",
    "state_name": "Uttar Pradesh",
    "state_id": 34
  },
  {
    "district_id": 723,
    "district_name": "Jhargram",
    "state_name": "West Bengal",
    "state_id": 36
  },
  {
    "district_id": 474,
    "district_name": "Jharsuguda",
    "state_name": "Odisha",
    "state_id": 26
  },
  {
    "district_id": 510,
    "district_name": "Jhunjhunu",
    "state_name": "Rajasthan",
    "state_id": 29
  },
  {
    "district_id": 204,
    "district_name": "Jind",
    "state_name": "Haryana",
    "state_id": 12
  },
  {
    "district_id": 410,
    "district_name": "Jiribam",
    "state_name": "Manipur",
    "state_id": 22
  },
  {
    "district_id": 502,
    "district_name": "Jodhpur",
    "state_name": "Rajasthan",
    "state_id": 29
  },
  {
    "district_id": 587,
    "district_name": "Jogulamba Gadwal",
    "state_name": "Telangana",
    "state_id": 32
  },
  {
    "district_id": 54,
    "district_name": "Jorhat",
    "state_name": "Assam",
    "state_id": 4
  },
  {
    "district_id": 178,
    "district_name": "Junagadh",
    "state_name": "Gujarat",
    "state_id": 11
  },
  {
    "district_id": 774,
    "district_name": "Junagadh Corporation",
    "state_name": "Gujarat",
    "state_id": 11
  },
  {
    "district_id": 80,
    "district_name": "Kaimur",
    "state_name": "Bihar",
    "state_id": 5
  },
  {
    "district_id": 190,
    "district_name": "Kaithal",
    "state_name": "Haryana",
    "state_id": 12
  },
  {
    "district_id": 413,
    "district_name": "Kakching",
    "state_name": "Manipur",
    "state_id": 22
  },
  {
    "district_id": 464,
    "district_name": "Kalahandi",
    "state_name": "Odisha",
    "state_id": 26
  },
  {
    "district_id": 724,
    "district_name": "Kalimpong",
    "state_name": "West Bengal",
    "state_id": 36
  },
  {
    "district_id": 552,
    "district_name": "Kallakurichi",
    "state_name": "Tamil Nadu",
    "state_id": 31
  },
  {
    "district_id": 588,
    "district_name": "Kamareddy",
    "state_name": "Telangana",
    "state_id": 32
  },
  {
    "district_id": 409,
    "district_name": "Kamjong",
    "state_name": "Manipur",
    "state_id": 22
  },
  {
    "district_id": 24,
    "district_name": "Kamle",
    "state_name": "Arunachal Pradesh",
    "state_id": 3
  },
  {
    "district_id": 49,
    "district_name": "Kamrup Metropolitan",
    "state_name": "Assam",
    "state_id": 4
  },
  {
    "district_id": 50,
    "district_name": "Kamrup Rural",
    "state_name": "Assam",
    "state_id": 4
  },
  {
    "district_id": 557,
    "district_name": "Kanchipuram",
    "state_name": "Tamil Nadu",
    "state_id": 31
  },
  {
    "district_id": 450,
    "district_name": "Kandhamal",
    "state_name": "Odisha",
    "state_id": 26
  },
  {
    "district_id": 408,
    "district_name": "Kangpokpi",
    "state_name": "Manipur",
    "state_id": 22
  },
  {
    "district_id": 213,
    "district_name": "Kangra",
    "state_name": "Himachal Pradesh",
    "state_id": 13
  },
  {
    "district_id": 123,
    "district_name": "Kanker",
    "state_name": "Chhattisgarh",
    "state_id": 7
  },
  {
    "district_id": 662,
    "district_name": "Kannauj",
    "state_name": "Uttar Pradesh",
    "state_id": 34
  },
  {
    "district_id": 297,
    "district_name": "Kannur",
    "state_name": "Kerala",
    "state_id": 17
  },
  {
    "district_id": 663,
    "district_name": "Kanpur Dehat",
    "state_name": "Uttar Pradesh",
    "state_id": 34
  },
  {
    "district_id": 664,
    "district_name": "Kanpur Nagar",
    "state_name": "Uttar Pradesh",
    "state_id": 34
  },
  {
    "district_id": 544,
    "district_name": "Kanyakumari",
    "state_name": "Tamil Nadu",
    "state_id": 31
  },
  {
    "district_id": 479,
    "district_name": "Kapurthala",
    "state_name": "Punjab",
    "state_id": 28
  },
  {
    "district_id": 476,
    "district_name": "Karaikal",
    "state_name": "Puducherry",
    "state_id": 27
  },
  {
    "district_id": 525,
    "district_name": "Karauli",
    "state_name": "Rajasthan",
    "state_id": 29
  },
  {
    "district_id": 51,
    "district_name": "Karbi-Anglong",
    "state_name": "Assam",
    "state_id": 4
  },
  {
    "district_id": 309,
    "district_name": "Kargil",
    "state_name": "Ladakh",
    "state_id": 18
  },
  {
    "district_id": 69,
    "district_name": "Karimganj",
    "state_name": "Assam",
    "state_id": 4
  },
  {
    "district_id": 589,
    "district_name": "Karimnagar",
    "state_name": "Telangana",
    "state_id": 32
  },
  {
    "district_id": 203,
    "district_name": "Karnal",
    "state_name": "Haryana",
    "state_id": 12
  },
  {
    "district_id": 559,
    "district_name": "Karur",
    "state_name": "Tamil Nadu",
    "state_id": 31
  },
  {
    "district_id": 295,
    "district_name": "Kasaragod",
    "state_name": "Kerala",
    "state_id": 17
  },
  {
    "district_id": 665,
    "district_name": "Kasganj",
    "state_name": "Uttar Pradesh",
    "state_id": 34
  },
  {
    "district_id": 234,
    "district_name": "Kathua",
    "state_name": "Jammu and Kashmir",
    "state_id": 14
  },
  {
    "district_id": 75,
    "district_name": "Katihar",
    "state_name": "Bihar",
    "state_id": 5
  },
  {
    "district_id": 353,
    "district_name": "Katni",
    "state_name": "Madhya Pradesh",
    "state_id": 20
  },
  {
    "district_id": 666,
    "district_name": "Kaushambi",
    "state_name": "Uttar Pradesh",
    "state_id": 34
  },
  {
    "district_id": 135,
    "district_name": "Kawardha",
    "state_name": "Chhattisgarh",
    "state_id": 7
  },
  {
    "district_id": 461,
    "district_name": "Kendrapara",
    "state_name": "Odisha",
    "state_id": 26
  },
  {
    "district_id": 455,
    "district_name": "Kendujhar",
    "state_name": "Odisha",
    "state_id": 26
  },
  {
    "district_id": 101,
    "district_name": "Khagaria",
    "state_name": "Bihar",
    "state_id": 5
  },
  {
    "district_id": 590,
    "district_name": "Khammam",
    "state_name": "Telangana",
    "state_id": 32
  },
  {
    "district_id": 339,
    "district_name": "Khandwa",
    "state_name": "Madhya Pradesh",
    "state_id": 20
  },
  {
    "district_id": 344,
    "district_name": "Khargone",
    "state_name": "Madhya Pradesh",
    "state_id": 20
  },
  {
    "district_id": 156,
    "district_name": "Kheda",
    "state_name": "Gujarat",
    "state_id": 11
  },
  {
    "district_id": 616,
    "district_name": "Khowai",
    "state_name": "Tripura",
    "state_id": 33
  },
  {
    "district_id": 252,
    "district_name": "Khunti",
    "state_name": "Jharkhand",
    "state_id": 15
  },
  {
    "district_id": 446,
    "district_name": "Khurda",
    "state_name": "Odisha",
    "state_id": 26
  },
  {
    "district_id": 216,
    "district_name": "Kinnaur",
    "state_name": "Himachal Pradesh",
    "state_id": 13
  },
  {
    "district_id": 444,
    "district_name": "Kiphire",
    "state_name": "Nagaland",
    "state_id": 25
  },
  {
    "district_id": 76,
    "district_name": "Kishanganj",
    "state_name": "Bihar",
    "state_id": 5
  },
  {
    "district_id": 231,
    "district_name": "Kishtwar",
    "state_name": "Jammu and Kashmir",
    "state_id": 14
  },
  {
    "district_id": 283,
    "district_name": "Kodagu",
    "state_name": "Karnataka",
    "state_id": 16
  },
  {
    "district_id": 241,
    "district_name": "Koderma",
    "state_name": "Jharkhand",
    "state_id": 15
  },
  {
    "district_id": 441,
    "district_name": "Kohima",
    "state_name": "Nagaland",
    "state_id": 25
  },
  {
    "district_id": 61,
    "district_name": "Kokrajhar",
    "state_name": "Assam",
    "state_id": 4
  },
  {
    "district_id": 277,
    "district_name": "Kolar",
    "state_name": "Karnataka",
    "state_id": 16
  },
  {
    "district_id": 428,
    "district_name": "Kolasib",
    "state_name": "Mizoram",
    "state_id": 24
  },
  {
    "district_id": 371,
    "district_name": "Kolhapur",
    "state_name": "Maharashtra",
    "state_id": 21
  },
  {
    "district_id": 725,
    "district_name": "Kolkata",
    "state_name": "West Bengal",
    "state_id": 36
  },
  {
    "district_id": 298,
    "district_name": "Kollam",
    "state_name": "Kerala",
    "state_id": 17
  },
  {
    "district_id": 124,
    "district_name": "Kondagaon",
    "state_name": "Chhattisgarh",
    "state_id": 7
  },
  {
    "district_id": 282,
    "district_name": "Koppal",
    "state_name": "Karnataka",
    "state_id": 16
  },
  {
    "district_id": 451,
    "district_name": "Koraput",
    "state_name": "Odisha",
    "state_id": 26
  },
  {
    "district_id": 125,
    "district_name": "Korba",
    "state_name": "Chhattisgarh",
    "state_id": 7
  },
  {
    "district_id": 126,
    "district_name": "Koriya",
    "state_name": "Chhattisgarh",
    "state_id": 7
  },
  {
    "district_id": 503,
    "district_name": "Kota",
    "state_name": "Rajasthan",
    "state_id": 29
  },
  {
    "district_id": 304,
    "district_name": "Kottayam",
    "state_name": "Kerala",
    "state_id": 17
  },
  {
    "district_id": 780,
    "district_name": "Kovilpatti",
    "state_name": "Tamil Nadu",
    "state_id": 31
  },
  {
    "district_id": 305,
    "district_name": "Kozhikode",
    "state_name": "Kerala",
    "state_id": 17
  },
  {
    "district_id": 27,
    "district_name": "Kra Daadi",
    "state_name": "Arunachal Pradesh",
    "state_id": 3
  },
  {
    "district_id": 4,
    "district_name": "Krishna",
    "state_name": "Andhra Pradesh",
    "state_id": 2
  },
  {
    "district_id": 562,
    "district_name": "Krishnagiri",
    "state_name": "Tamil Nadu",
    "state_id": 31
  },
  {
    "district_id": 221,
    "district_name": "Kulgam",
    "state_name": "Jammu and Kashmir",
    "state_id": 14
  },
  {
    "district_id": 211,
    "district_name": "Kullu",
    "state_name": "Himachal Pradesh",
    "state_id": 13
  },
  {
    "district_id": 591,
    "district_name": "Kumuram Bheem",
    "state_name": "Telangana",
    "state_id": 32
  },
  {
    "district_id": 226,
    "district_name": "Kupwara",
    "state_name": "Jammu and Kashmir",
    "state_id": 14
  },
  {
    "district_id": 7,
    "district_name": "Kurnool",
    "state_name": "Andhra Pradesh",
    "state_id": 2
  },
  {
    "district_id": 186,
    "district_name": "Kurukshetra",
    "state_name": "Haryana",
    "state_id": 12
  },
  {
    "district_id": 21,
    "district_name": "Kurung Kumey",
    "state_name": "Arunachal Pradesh",
    "state_id": 3
  },
  {
    "district_id": 667,
    "district_name": "Kushinagar",
    "state_name": "Uttar Pradesh",
    "state_id": 34
  },
  {
    "district_id": 170,
    "district_name": "Kutch",
    "state_name": "Gujarat",
    "state_id": 11
  },
  {
    "district_id": 210,
    "district_name": "Lahaul Spiti",
    "state_name": "Himachal Pradesh",
    "state_id": 13
  },
  {
    "district_id": 63,
    "district_name": "Lakhimpur",
    "state_name": "Assam",
    "state_id": 4
  },
  {
    "district_id": 668,
    "district_name": "Lakhimpur Kheri",
    "state_name": "Uttar Pradesh",
    "state_id": 34
  },
  {
    "district_id": 84,
    "district_name": "Lakhisarai",
    "state_name": "Bihar",
    "state_id": 5
  },
  {
    "district_id": 311,
    "district_name": "Lakshadweep",
    "state_name": "Lakshadweep",
    "state_id": 19
  },
  {
    "district_id": 669,
    "district_name": "Lalitpur",
    "state_name": "Uttar Pradesh",
    "state_id": 34
  },
  {
    "district_id": 244,
    "district_name": "Latehar",
    "state_name": "Jharkhand",
    "state_id": 15
  },
  {
    "district_id": 383,
    "district_name": "Latur",
    "state_name": "Maharashtra",
    "state_id": 21
  },
  {
    "district_id": 432,
    "district_name": "Lawngtlai",
    "state_name": "Mizoram",
    "state_id": 24
  },
  {
    "district_id": 310,
    "district_name": "Leh",
    "state_name": "Ladakh",
    "state_id": 18
  },
  {
    "district_id": 33,
    "district_name": "Lepa Rada",
    "state_name": "Arunachal Pradesh",
    "state_id": 3
  },
  {
    "district_id": 250,
    "district_name": "Lohardaga",
    "state_name": "Jharkhand",
    "state_id": 15
  },
  {
    "district_id": 29,
    "district_name": "Lohit",
    "state_name": "Arunachal Pradesh",
    "state_id": 3
  },
  {
    "district_id": 40,
    "district_name": "Longding",
    "state_name": "Arunachal Pradesh",
    "state_id": 3
  },
  {
    "district_id": 438,
    "district_name": "Longleng",
    "state_name": "Nagaland",
    "state_id": 25
  },
  {
    "district_id": 31,
    "district_name": "Lower Dibang Valley",
    "state_name": "Arunachal Pradesh",
    "state_id": 3
  },
  {
    "district_id": 18,
    "district_name": "Lower Siang",
    "state_name": "Arunachal Pradesh",
    "state_id": 3
  },
  {
    "district_id": 32,
    "district_name": "Lower Subansiri",
    "state_name": "Arunachal Pradesh",
    "state_id": 3
  },
  {
    "district_id": 670,
    "district_name": "Lucknow",
    "state_name": "Uttar Pradesh",
    "state_id": 34
  },
  {
    "district_id": 488,
    "district_name": "Ludhiana",
    "state_name": "Punjab",
    "state_id": 28
  },
  {
    "district_id": 431,
    "district_name": "Lunglei",
    "state_name": "Mizoram",
    "state_id": 24
  },
  {
    "district_id": 70,
    "district_name": "Madhepura",
    "state_name": "Bihar",
    "state_id": 5
  },
  {
    "district_id": 95,
    "district_name": "Madhubani",
    "state_name": "Bihar",
    "state_id": 5
  },
  {
    "district_id": 540,
    "district_name": "Madurai",
    "state_name": "Tamil Nadu",
    "state_id": 31
  },
  {
    "district_id": 592,
    "district_name": "Mahabubabad",
    "state_name": "Telangana",
    "state_id": 32
  },
  {
    "district_id": 593,
    "district_name": "Mahabubnagar",
    "state_name": "Telangana",
    "state_id": 32
  },
  {
    "district_id": 671,
    "district_name": "Maharajganj",
    "state_name": "Uttar Pradesh",
    "state_id": 34
  },
  {
    "district_id": 127,
    "district_name": "Mahasamund",
    "state_name": "Chhattisgarh",
    "state_id": 7
  },
  {
    "district_id": 477,
    "district_name": "Mahe",
    "state_name": "Puducherry",
    "state_id": 27
  },
  {
    "district_id": 206,
    "district_name": "Mahendragarh",
    "state_name": "Haryana",
    "state_id": 12
  },
  {
    "district_id": 183,
    "district_name": "Mahisagar",
    "state_name": "Gujarat",
    "state_id": 11
  },
  {
    "district_id": 672,
    "district_name": "Mahoba",
    "state_name": "Uttar Pradesh",
    "state_id": 34
  },
  {
    "district_id": 673,
    "district_name": "Mainpuri",
    "state_name": "Uttar Pradesh",
    "state_id": 34
  },
  {
    "district_id": 767,
    "district_name": "Majuli",
    "state_name": "Assam",
    "state_id": 4
  },
  {
    "district_id": 302,
    "district_name": "Malappuram",
    "state_name": "Kerala",
    "state_id": 17
  },
  {
    "district_id": 726,
    "district_name": "Malda",
    "state_name": "West Bengal",
    "state_id": 36
  },
  {
    "district_id": 469,
    "district_name": "Malkangiri",
    "state_name": "Odisha",
    "state_id": 26
  },
  {
    "district_id": 427,
    "district_name": "Mamit",
    "state_name": "Mizoram",
    "state_id": 24
  },
  {
    "district_id": 594,
    "district_name": "Mancherial",
    "state_name": "Telangana",
    "state_id": 32
  },
  {
    "district_id": 215,
    "district_name": "Mandi",
    "state_name": "Himachal Pradesh",
    "state_id": 13
  },
  {
    "district_id": 335,
    "district_name": "Mandla",
    "state_name": "Madhya Pradesh",
    "state_id": 20
  },
  {
    "district_id": 319,
    "district_name": "Mandsaur",
    "state_name": "Madhya Pradesh",
    "state_id": 20
  },
  {
    "district_id": 290,
    "district_name": "Mandya",
    "state_name": "Karnataka",
    "state_id": 16
  },
  {
    "district_id": 482,
    "district_name": "Mansa",
    "state_name": "Punjab",
    "state_id": 28
  },
  {
    "district_id": 674,
    "district_name": "Mathura",
    "state_name": "Uttar Pradesh",
    "state_id": 34
  },
  {
    "district_id": 675,
    "district_name": "Mau",
    "state_name": "Uttar Pradesh",
    "state_id": 34
  },
  {
    "district_id": 456,
    "district_name": "Mayurbhanj",
    "state_name": "Odisha",
    "state_id": 26
  },
  {
    "district_id": 595,
    "district_name": "Medak",
    "state_name": "Telangana",
    "state_id": 32
  },
  {
    "district_id": 596,
    "district_name": "Medchal",
    "state_name": "Telangana",
    "state_id": 32
  },
  {
    "district_id": 676,
    "district_name": "Meerut",
    "state_name": "Uttar Pradesh",
    "state_id": 34
  },
  {
    "district_id": 160,
    "district_name": "Mehsana",
    "state_name": "Gujarat",
    "state_id": 11
  },
  {
    "district_id": 677,
    "district_name": "Mirzapur",
    "state_name": "Uttar Pradesh",
    "state_id": 34
  },
  {
    "district_id": 491,
    "district_name": "Moga",
    "state_name": "Punjab",
    "state_id": 28
  },
  {
    "district_id": 437,
    "district_name": "Mokokchung",
    "state_name": "Nagaland",
    "state_id": 25
  },
  {
    "district_id": 439,
    "district_name": "Mon",
    "state_name": "Nagaland",
    "state_id": 25
  },
  {
    "district_id": 678,
    "district_name": "Moradabad",
    "state_name": "Uttar Pradesh",
    "state_id": 34
  },
  {
    "district_id": 171,
    "district_name": "Morbi",
    "state_name": "Gujarat",
    "state_id": 11
  },
  {
    "district_id": 347,
    "district_name": "Morena",
    "state_name": "Madhya Pradesh",
    "state_id": 20
  },
  {
    "district_id": 55,
    "district_name": "Morigaon",
    "state_name": "Assam",
    "state_id": 4
  },
  {
    "district_id": 612,
    "district_name": "Mulugu",
    "state_name": "Telangana",
    "state_id": 32
  },
  {
    "district_id": 395,
    "district_name": "Mumbai",
    "state_name": "Maharashtra",
    "state_id": 21
  },
  {
    "district_id": 128,
    "district_name": "Mungeli",
    "state_name": "Chhattisgarh",
    "state_id": 7
  },
  {
    "district_id": 85,
    "district_name": "Munger",
    "state_name": "Bihar",
    "state_id": 5
  },
  {
    "district_id": 727,
    "district_name": "Murshidabad",
    "state_name": "West Bengal",
    "state_id": 36
  },
  {
    "district_id": 679,
    "district_name": "Muzaffarnagar",
    "state_name": "Uttar Pradesh",
    "state_id": 34
  },
  {
    "district_id": 86,
    "district_name": "Muzaffarpur",
    "state_name": "Bihar",
    "state_id": 5
  },
  {
    "district_id": 266,
    "district_name": "Mysore",
    "state_name": "Karnataka",
    "state_id": 16
  },
  {
    "district_id": 470,
    "district_name": "Nabarangpur",
    "state_name": "Odisha",
    "state_id": 26
  },
  {
    "district_id": 728,
    "district_name": "Nadia",
    "state_name": "West Bengal",
    "state_id": 36
  },
  {
    "district_id": 56,
    "district_name": "Nagaon",
    "state_name": "Assam",
    "state_id": 4
  },
  {
    "district_id": 576,
    "district_name": "Nagapattinam",
    "state_name": "Tamil Nadu",
    "state_id": 31
  },
  {
    "district_id": 597,
    "district_name": "Nagarkurnool",
    "state_name": "Telangana",
    "state_id": 32
  },
  {
    "district_id": 532,
    "district_name": "Nagaur",
    "state_name": "Rajasthan",
    "state_id": 29
  },
  {
    "district_id": 365,
    "district_name": "Nagpur",
    "state_name": "Maharashtra",
    "state_id": 21
  },
  {
    "district_id": 709,
    "district_name": "Nainital",
    "state_name": "Uttarakhand",
    "state_id": 35
  },
  {
    "district_id": 90,
    "district_name": "Nalanda",
    "state_name": "Bihar",
    "state_id": 5
  },
  {
    "district_id": 52,
    "district_name": "Nalbari",
    "state_name": "Assam",
    "state_id": 4
  },
  {
    "district_id": 598,
    "district_name": "Nalgonda",
    "state_name": "Telangana",
    "state_id": 32
  },
  {
    "district_id": 558,
    "district_name": "Namakkal",
    "state_name": "Tamil Nadu",
    "state_id": 31
  },
  {
    "district_id": 36,
    "district_name": "Namsai",
    "state_name": "Arunachal Pradesh",
    "state_id": 3
  },
  {
    "district_id": 382,
    "district_name": "Nanded",
    "state_name": "Maharashtra",
    "state_id": 21
  },
  {
    "district_id": 729,
    "district_name": "Nandigram HD (East Medinipore)",
    "state_name": "West Bengal",
    "state_id": 36
  },
  {
    "district_id": 387,
    "district_name": "Nandurbar",
    "state_name": "Maharashtra",
    "state_id": 21
  },
  {
    "district_id": 613,
    "district_name": "Narayanpet",
    "state_name": "Telangana",
    "state_id": 32
  },
  {
    "district_id": 129,
    "district_name": "Narayanpur",
    "state_name": "Chhattisgarh",
    "state_id": 7
  },
  {
    "district_id": 184,
    "district_name": "Narmada",
    "state_name": "Gujarat",
    "state_id": 11
  },
  {
    "district_id": 352,
    "district_name": "Narsinghpur",
    "state_name": "Madhya Pradesh",
    "state_id": 20
  },
  {
    "district_id": 389,
    "district_name": "Nashik",
    "state_name": "Maharashtra",
    "state_id": 21
  },
  {
    "district_id": 164,
    "district_name": "Navsari",
    "state_name": "Gujarat",
    "state_id": 11
  },
  {
    "district_id": 92,
    "district_name": "Nawada",
    "state_name": "Bihar",
    "state_id": 5
  },
  {
    "district_id": 462,
    "district_name": "Nayagarh",
    "state_name": "Odisha",
    "state_id": 26
  },
  {
    "district_id": 323,
    "district_name": "Neemuch",
    "state_name": "Madhya Pradesh",
    "state_id": 20
  },
  {
    "district_id": 140,
    "district_name": "New Delhi",
    "state_name": "Delhi",
    "state_id": 9
  },
  {
    "district_id": 3,
    "district_name": "Nicobar",
    "state_name": "Andaman and Nicobar Islands",
    "state_id": 1
  },
  {
    "district_id": 577,
    "district_name": "Nilgiris",
    "state_name": "Tamil Nadu",
    "state_id": 31
  },
  {
    "district_id": 599,
    "district_name": "Nirmal",
    "state_name": "Telangana",
    "state_id": 32
  },
  {
    "district_id": 600,
    "district_name": "Nizamabad",
    "state_name": "Telangana",
    "state_id": 32
  },
  {
    "district_id": 412,
    "district_name": "Noney",
    "state_name": "Manipur",
    "state_id": 22
  },
  {
    "district_id": 730,
    "district_name": "North 24 Parganas",
    "state_name": "West Bengal",
    "state_id": 36
  },
  {
    "district_id": 1,
    "district_name": "North and Middle Andaman",
    "state_name": "Andaman and Nicobar Islands",
    "state_id": 1
  },
  {
    "district_id": 146,
    "district_name": "North Delhi",
    "state_name": "Delhi",
    "state_id": 9
  },
  {
    "district_id": 147,
    "district_name": "North East Delhi",
    "state_name": "Delhi",
    "state_id": 9
  },
  {
    "district_id": 423,
    "district_name": "North Garo Hills",
    "state_name": "Meghalaya",
    "state_id": 23
  },
  {
    "district_id": 151,
    "district_name": "North Goa",
    "state_name": "Goa",
    "state_id": 10
  },
  {
    "district_id": 537,
    "district_name": "North Sikkim",
    "state_name": "Sikkim",
    "state_id": 30
  },
  {
    "district_id": 617,
    "district_name": "North Tripura",
    "state_name": "Tripura",
    "state_id": 33
  },
  {
    "district_id": 143,
    "district_name": "North West Delhi",
    "state_name": "Delhi",
    "state_id": 9
  },
  {
    "district_id": 465,
    "district_name": "Nuapada",
    "state_name": "Odisha",
    "state_id": 26
  },
  {
    "district_id": 205,
    "district_name": "Nuh",
    "state_name": "Haryana",
    "state_id": 12
  },
  {
    "district_id": 381,
    "district_name": "Osmanabad",
    "state_name": "Maharashtra",
    "state_id": 21
  },
  {
    "district_id": 19,
    "district_name": "Pakke Kessang",
    "state_name": "Arunachal Pradesh",
    "state_id": 3
  },
  {
    "district_id": 261,
    "district_name": "Pakur",
    "state_name": "Jharkhand",
    "state_id": 15
  },
  {
    "district_id": 308,
    "district_name": "Palakkad",
    "state_name": "Kerala",
    "state_id": 17
  },
  {
    "district_id": 246,
    "district_name": "Palamu",
    "state_name": "Jharkhand",
    "state_id": 15
  },
  {
    "district_id": 564,
    "district_name": "Palani",
    "state_name": "Tamil Nadu",
    "state_id": 31
  },
  {
    "district_id": 394,
    "district_name": "Palghar",
    "state_name": "Maharashtra",
    "state_id": 21
  },
  {
    "district_id": 529,
    "district_name": "Pali",
    "state_name": "Rajasthan",
    "state_id": 29
  },
  {
    "district_id": 207,
    "district_name": "Palwal",
    "state_name": "Haryana",
    "state_id": 12
  },
  {
    "district_id": 187,
    "district_name": "Panchkula",
    "state_name": "Haryana",
    "state_id": 12
  },
  {
    "district_id": 185,
    "district_name": "Panchmahal",
    "state_name": "Gujarat",
    "state_id": 11
  },
  {
    "district_id": 195,
    "district_name": "Panipat",
    "state_name": "Haryana",
    "state_id": 12
  },
  {
    "district_id": 326,
    "district_name": "Panna",
    "state_name": "Madhya Pradesh",
    "state_id": 20
  },
  {
    "district_id": 39,
    "district_name": "Papum Pare",
    "state_name": "Arunachal Pradesh",
    "state_id": 3
  },
  {
    "district_id": 573,
    "district_name": "Paramakudi",
    "state_name": "Tamil Nadu",
    "state_id": 31
  },
  {
    "district_id": 385,
    "district_name": "Parbhani",
    "state_name": "Maharashtra",
    "state_id": 21
  },
  {
    "district_id": 731,
    "district_name": "Paschim Medinipore",
    "state_name": "West Bengal",
    "state_id": 36
  },
  {
    "district_id": 161,
    "district_name": "Patan",
    "state_name": "Gujarat",
    "state_id": 11
  },
  {
    "district_id": 300,
    "district_name": "Pathanamthitta",
    "state_name": "Kerala",
    "state_id": 17
  },
  {
    "district_id": 486,
    "district_name": "Pathankot",
    "state_name": "Punjab",
    "state_id": 28
  },
  {
    "district_id": 494,
    "district_name": "Patiala",
    "state_name": "Punjab",
    "state_id": 28
  },
  {
    "district_id": 97,
    "district_name": "Patna",
    "state_name": "Bihar",
    "state_id": 5
  },
  {
    "district_id": 698,
    "district_name": "Pauri Garhwal",
    "state_name": "Uttarakhand",
    "state_id": 35
  },
  {
    "district_id": 601,
    "district_name": "Peddapalli",
    "state_name": "Telangana",
    "state_id": 32
  },
  {
    "district_id": 570,
    "district_name": "Perambalur",
    "state_name": "Tamil Nadu",
    "state_id": 31
  },
  {
    "district_id": 435,
    "district_name": "Peren",
    "state_name": "Nagaland",
    "state_id": 25
  },
  {
    "district_id": 443,
    "district_name": "Phek",
    "state_name": "Nagaland",
    "state_id": 25
  },
  {
    "district_id": 411,
    "district_name": "Pherzawl",
    "state_name": "Manipur",
    "state_id": 22
  },
  {
    "district_id": 680,
    "district_name": "Pilibhit",
    "state_name": "Uttar Pradesh",
    "state_id": 34
  },
  {
    "district_id": 706,
    "district_name": "Pithoragarh",
    "state_name": "Uttarakhand",
    "state_id": 35
  },
  {
    "district_id": 575,
    "district_name": "Poonamallee",
    "state_name": "Tamil Nadu",
    "state_id": 31
  },
  {
    "district_id": 238,
    "district_name": "Poonch",
    "state_name": "Jammu and Kashmir",
    "state_id": 14
  },
  {
    "district_id": 172,
    "district_name": "Porbandar",
    "state_name": "Gujarat",
    "state_id": 11
  },
  {
    "district_id": 12,
    "district_name": "Prakasam",
    "state_name": "Andhra Pradesh",
    "state_id": 2
  },
  {
    "district_id": 522,
    "district_name": "Pratapgarh",
    "state_name": "Rajasthan",
    "state_id": 29
  },
  {
    "district_id": 682,
    "district_name": "Pratapgarh",
    "state_name": "Uttar Pradesh",
    "state_id": 34
  },
  {
    "district_id": 624,
    "district_name": "Prayagraj",
    "state_name": "Uttar Pradesh",
    "state_id": 34
  },
  {
    "district_id": 475,
    "district_name": "Puducherry",
    "state_name": "Puducherry",
    "state_id": 27
  },
  {
    "district_id": 546,
    "district_name": "Pudukkottai",
    "state_name": "Tamil Nadu",
    "state_id": 31
  },
  {
    "district_id": 227,
    "district_name": "Pulwama",
    "state_name": "Jammu and Kashmir",
    "state_id": 14
  },
  {
    "district_id": 363,
    "district_name": "Pune",
    "state_name": "Maharashtra",
    "state_id": 21
  },
  {
    "district_id": 732,
    "district_name": "Purba Medinipore",
    "state_name": "West Bengal",
    "state_id": 36
  },
  {
    "district_id": 463,
    "district_name": "Puri",
    "state_name": "Odisha",
    "state_id": 26
  },
  {
    "district_id": 73,
    "district_name": "Purnia",
    "state_name": "Bihar",
    "state_id": 5
  },
  {
    "district_id": 733,
    "district_name": "Purulia",
    "state_name": "West Bengal",
    "state_id": 36
  },
  {
    "district_id": 681,
    "district_name": "Raebareli",
    "state_name": "Uttar Pradesh",
    "state_id": 34
  },
  {
    "district_id": 284,
    "district_name": "Raichur",
    "state_name": "Karnataka",
    "state_id": 16
  },
  {
    "district_id": 393,
    "district_name": "Raigad",
    "state_name": "Maharashtra",
    "state_id": 21
  },
  {
    "district_id": 130,
    "district_name": "Raigarh",
    "state_name": "Chhattisgarh",
    "state_id": 7
  },
  {
    "district_id": 109,
    "district_name": "Raipur",
    "state_name": "Chhattisgarh",
    "state_id": 7
  },
  {
    "district_id": 359,
    "district_name": "Raisen",
    "state_name": "Madhya Pradesh",
    "state_id": 20
  },
  {
    "district_id": 602,
    "district_name": "Rajanna Sircilla",
    "state_name": "Telangana",
    "state_id": 32
  },
  {
    "district_id": 358,
    "district_name": "Rajgarh",
    "state_name": "Madhya Pradesh",
    "state_id": 20
  },
  {
    "district_id": 173,
    "district_name": "Rajkot",
    "state_name": "Gujarat",
    "state_id": 11
  },
  {
    "district_id": 775,
    "district_name": "Rajkot Corporation",
    "state_name": "Gujarat",
    "state_id": 11
  },
  {
    "district_id": 131,
    "district_name": "Rajnandgaon",
    "state_name": "Chhattisgarh",
    "state_id": 7
  },
  {
    "district_id": 237,
    "district_name": "Rajouri",
    "state_name": "Jammu and Kashmir",
    "state_id": 14
  },
  {
    "district_id": 518,
    "district_name": "Rajsamand",
    "state_name": "Rajasthan",
    "state_id": 29
  },
  {
    "district_id": 292,
    "district_name": "Ramanagara",
    "state_name": "Karnataka",
    "state_id": 16
  },
  {
    "district_id": 567,
    "district_name": "Ramanathapuram",
    "state_name": "Tamil Nadu",
    "state_id": 31
  },
  {
    "district_id": 235,
    "district_name": "Ramban",
    "state_name": "Jammu and Kashmir",
    "state_id": 14
  },
  {
    "district_id": 254,
    "district_name": "Ramgarh",
    "state_name": "Jharkhand",
    "state_id": 15
  },
  {
    "district_id": 683,
    "district_name": "Rampur",
    "state_name": "Uttar Pradesh",
    "state_id": 34
  },
  {
    "district_id": 734,
    "district_name": "Rampurhat HD (Birbhum)",
    "state_name": "West Bengal",
    "state_id": 36
  },
  {
    "district_id": 240,
    "district_name": "Ranchi",
    "state_name": "Jharkhand",
    "state_id": 15
  },
  {
    "district_id": 603,
    "district_name": "Rangareddy",
    "state_name": "Telangana",
    "state_id": 32
  },
  {
    "district_id": 781,
    "district_name": "Ranipet",
    "state_name": "Tamil Nadu",
    "state_id": 31
  },
  {
    "district_id": 322,
    "district_name": "Ratlam",
    "state_name": "Madhya Pradesh",
    "state_id": 20
  },
  {
    "district_id": 372,
    "district_name": "Ratnagiri",
    "state_name": "Maharashtra",
    "state_id": 21
  },
  {
    "district_id": 471,
    "district_name": "Rayagada",
    "state_name": "Odisha",
    "state_id": 26
  },
  {
    "district_id": 239,
    "district_name": "Reasi",
    "state_name": "Jammu and Kashmir",
    "state_id": 14
  },
  {
    "district_id": 316,
    "district_name": "Rewa",
    "state_name": "Madhya Pradesh",
    "state_id": 20
  },
  {
    "district_id": 202,
    "district_name": "Rewari",
    "state_name": "Haryana",
    "state_id": 12
  },
  {
    "district_id": 417,
    "district_name": "Ri-Bhoi",
    "state_name": "Meghalaya",
    "state_id": 23
  },
  {
    "district_id": 192,
    "district_name": "Rohtak",
    "state_name": "Haryana",
    "state_id": 12
  },
  {
    "district_id": 81,
    "district_name": "Rohtas",
    "state_name": "Bihar",
    "state_id": 5
  },
  {
    "district_id": 700,
    "district_name": "Rudraprayag",
    "state_name": "Uttarakhand",
    "state_id": 35
  },
  {
    "district_id": 497,
    "district_name": "Rup Nagar",
    "state_name": "Punjab",
    "state_id": 28
  },
  {
    "district_id": 162,
    "district_name": "Sabarkantha",
    "state_name": "Gujarat",
    "state_id": 11
  },
  {
    "district_id": 317,
    "district_name": "Sagar",
    "state_name": "Madhya Pradesh",
    "state_id": 20
  },
  {
    "district_id": 684,
    "district_name": "Saharanpur",
    "state_name": "Uttar Pradesh",
    "state_id": 34
  },
  {
    "district_id": 71,
    "district_name": "Saharsa",
    "state_name": "Bihar",
    "state_id": 5
  },
  {
    "district_id": 260,
    "district_name": "Sahebganj",
    "state_name": "Jharkhand",
    "state_id": 15
  },
  {
    "district_id": 545,
    "district_name": "Salem",
    "state_name": "Tamil Nadu",
    "state_id": 31
  },
  {
    "district_id": 96,
    "district_name": "Samastipur",
    "state_name": "Bihar",
    "state_id": 5
  },
  {
    "district_id": 236,
    "district_name": "Samba",
    "state_name": "Jammu and Kashmir",
    "state_id": 14
  },
  {
    "district_id": 452,
    "district_name": "Sambalpur",
    "state_name": "Odisha",
    "state_id": 26
  },
  {
    "district_id": 685,
    "district_name": "Sambhal",
    "state_name": "Uttar Pradesh",
    "state_id": 34
  },
  {
    "district_id": 604,
    "district_name": "Sangareddy",
    "state_name": "Telangana",
    "state_id": 32
  },
  {
    "district_id": 373,
    "district_name": "Sangli",
    "state_name": "Maharashtra",
    "state_id": 21
  },
  {
    "district_id": 498,
    "district_name": "Sangrur",
    "state_name": "Punjab",
    "state_id": 28
  },
  {
    "district_id": 686,
    "district_name": "Sant Kabir Nagar",
    "state_name": "Uttar Pradesh",
    "state_id": 34
  },
  {
    "district_id": 102,
    "district_name": "Saran",
    "state_name": "Bihar",
    "state_id": 5
  },
  {
    "district_id": 496,
    "district_name": "SAS Nagar",
    "state_name": "Punjab",
    "state_id": 28
  },
  {
    "district_id": 376,
    "district_name": "Satara",
    "state_name": "Maharashtra",
    "state_id": 21
  },
  {
    "district_id": 333,
    "district_name": "Satna",
    "state_name": "Madhya Pradesh",
    "state_id": 20
  },
  {
    "district_id": 534,
    "district_name": "Sawai Madhopur",
    "state_name": "Rajasthan",
    "state_id": 29
  },
  {
    "district_id": 500,
    "district_name": "SBS Nagar",
    "state_name": "Punjab",
    "state_id": 28
  },
  {
    "district_id": 356,
    "district_name": "Sehore",
    "state_name": "Madhya Pradesh",
    "state_id": 20
  },
  {
    "district_id": 403,
    "district_name": "Senapati",
    "state_name": "Manipur",
    "state_id": 22
  },
  {
    "district_id": 349,
    "district_name": "Seoni",
    "state_name": "Madhya Pradesh",
    "state_id": 20
  },
  {
    "district_id": 618,
    "district_name": "Sepahijala",
    "state_name": "Tripura",
    "state_id": 33
  },
  {
    "district_id": 248,
    "district_name": "Seraikela Kharsawan",
    "state_name": "Jharkhand",
    "state_id": 15
  },
  {
    "district_id": 430,
    "district_name": "Serchhip",
    "state_name": "Mizoram",
    "state_id": 24
  },
  {
    "district_id": 148,
    "district_name": "Shahdara",
    "state_name": "Delhi",
    "state_id": 9
  },
  {
    "district_id": 332,
    "district_name": "Shahdol",
    "state_name": "Madhya Pradesh",
    "state_id": 20
  },
  {
    "district_id": 688,
    "district_name": "Shahjahanpur",
    "state_name": "Uttar Pradesh",
    "state_id": 34
  },
  {
    "district_id": 321,
    "district_name": "Shajapur",
    "state_name": "Madhya Pradesh",
    "state_id": 20
  },
  {
    "district_id": 689,
    "district_name": "Shamli",
    "state_name": "Uttar Pradesh",
    "state_id": 34
  },
  {
    "district_id": 93,
    "district_name": "Sheikhpura",
    "state_name": "Bihar",
    "state_id": 5
  },
  {
    "district_id": 87,
    "district_name": "Sheohar",
    "state_name": "Bihar",
    "state_id": 5
  },
  {
    "district_id": 346,
    "district_name": "Sheopur",
    "state_name": "Madhya Pradesh",
    "state_id": 20
  },
  {
    "district_id": 35,
    "district_name": "Shi Yomi",
    "state_name": "Arunachal Pradesh",
    "state_id": 3
  },
  {
    "district_id": 208,
    "district_name": "Shimla",
    "state_name": "Himachal Pradesh",
    "state_id": 13
  },
  {
    "district_id": 287,
    "district_name": "Shimoga",
    "state_name": "Karnataka",
    "state_id": 16
  },
  {
    "district_id": 345,
    "district_name": "Shivpuri",
    "state_name": "Madhya Pradesh",
    "state_id": 20
  },
  {
    "district_id": 222,
    "district_name": "Shopian",
    "state_name": "Jammu and Kashmir",
    "state_id": 14
  },
  {
    "district_id": 690,
    "district_name": "Shravasti",
    "state_name": "Uttar Pradesh",
    "state_id": 34
  },
  {
    "district_id": 433,
    "district_name": "Siaha",
    "state_name": "Mizoram",
    "state_id": 24
  },
  {
    "district_id": 37,
    "district_name": "Siang",
    "state_name": "Arunachal Pradesh",
    "state_id": 3
  },
  {
    "district_id": 691,
    "district_name": "Siddharthnagar",
    "state_name": "Uttar Pradesh",
    "state_id": 34
  },
  {
    "district_id": 605,
    "district_name": "Siddipet",
    "state_name": "Telangana",
    "state_id": 32
  },
  {
    "district_id": 331,
    "district_name": "Sidhi",
    "state_name": "Madhya Pradesh",
    "state_id": 20
  },
  {
    "district_id": 513,
    "district_name": "Sikar",
    "state_name": "Rajasthan",
    "state_id": 29
  },
  {
    "district_id": 249,
    "district_name": "Simdega",
    "state_name": "Jharkhand",
    "state_id": 15
  },
  {
    "district_id": 374,
    "district_name": "Sindhudurg",
    "state_name": "Maharashtra",
    "state_id": 21
  },
  {
    "district_id": 330,
    "district_name": "Singrauli",
    "state_name": "Madhya Pradesh",
    "state_id": 20
  },
  {
    "district_id": 212,
    "district_name": "Sirmaur",
    "state_name": "Himachal Pradesh",
    "state_id": 13
  },
  {
    "district_id": 531,
    "district_name": "Sirohi",
    "state_name": "Rajasthan",
    "state_id": 29
  },
  {
    "district_id": 194,
    "district_name": "Sirsa",
    "state_name": "Haryana",
    "state_id": 12
  },
  {
    "district_id": 88,
    "district_name": "Sitamarhi",
    "state_name": "Bihar",
    "state_id": 5
  },
  {
    "district_id": 692,
    "district_name": "Sitapur",
    "state_name": "Uttar Pradesh",
    "state_id": 34
  },
  {
    "district_id": 561,
    "district_name": "Sivaganga",
    "state_name": "Tamil Nadu",
    "state_id": 31
  },
  {
    "district_id": 580,
    "district_name": "Sivakasi",
    "state_name": "Tamil Nadu",
    "state_id": 31
  },
  {
    "district_id": 44,
    "district_name": "Sivasagar",
    "state_name": "Assam",
    "state_id": 4
  },
  {
    "district_id": 103,
    "district_name": "Siwan",
    "state_name": "Bihar",
    "state_id": 5
  },
  {
    "district_id": 209,
    "district_name": "Solan",
    "state_name": "Himachal Pradesh",
    "state_id": 13
  },
  {
    "district_id": 375,
    "district_name": "Solapur",
    "state_name": "Maharashtra",
    "state_id": 21
  },
  {
    "district_id": 693,
    "district_name": "Sonbhadra",
    "state_name": "Uttar Pradesh",
    "state_id": 34
  },
  {
    "district_id": 198,
    "district_name": "Sonipat",
    "state_name": "Haryana",
    "state_id": 12
  },
  {
    "district_id": 64,
    "district_name": "Sonitpur",
    "state_name": "Assam",
    "state_id": 4
  },
  {
    "district_id": 735,
    "district_name": "South 24 Parganas",
    "state_name": "West Bengal",
    "state_id": 36
  },
  {
    "district_id": 2,
    "district_name": "South Andaman",
    "state_name": "Andaman and Nicobar Islands",
    "state_id": 1
  },
  {
    "district_id": 149,
    "district_name": "South Delhi",
    "state_name": "Delhi",
    "state_id": 9
  },
  {
    "district_id": 144,
    "district_name": "South East Delhi",
    "state_name": "Delhi",
    "state_id": 9
  },
  {
    "district_id": 421,
    "district_name": "South Garo Hills",
    "state_name": "Meghalaya",
    "state_id": 23
  },
  {
    "district_id": 152,
    "district_name": "South Goa",
    "state_name": "Goa",
    "state_id": 10
  },
  {
    "district_id": 768,
    "district_name": "South Salmara Mankachar",
    "state_name": "Assam",
    "state_id": 4
  },
  {
    "district_id": 538,
    "district_name": "South Sikkim",
    "state_name": "Sikkim",
    "state_id": 30
  },
  {
    "district_id": 619,
    "district_name": "South Tripura",
    "state_name": "Tripura",
    "state_id": 33
  },
  {
    "district_id": 150,
    "district_name": "South West Delhi",
    "state_name": "Delhi",
    "state_id": 9
  },
  {
    "district_id": 422,
    "district_name": "South West Garo Hills",
    "state_name": "Meghalaya",
    "state_id": 23
  },
  {
    "district_id": 415,
    "district_name": "South West Khasi Hills",
    "state_name": "Meghalaya",
    "state_id": 23
  },
  {
    "district_id": 509,
    "district_name": "Sri Ganganagar",
    "state_name": "Rajasthan",
    "state_id": 29
  },
  {
    "district_id": 490,
    "district_name": "Sri Muktsar Sahib",
    "state_name": "Punjab",
    "state_id": 28
  },
  {
    "district_id": 13,
    "district_name": "Sri Potti Sriramulu Nellore",
    "state_name": "Andhra Pradesh",
    "state_id": 2
  },
  {
    "district_id": 14,
    "district_name": "Srikakulam",
    "state_name": "Andhra Pradesh",
    "state_id": 2
  },
  {
    "district_id": 220,
    "district_name": "Srinagar",
    "state_name": "Jammu and Kashmir",
    "state_id": 14
  },
  {
    "district_id": 466,
    "district_name": "Subarnapur",
    "state_name": "Odisha",
    "state_id": 26
  },
  {
    "district_id": 132,
    "district_name": "Sukma",
    "state_name": "Chhattisgarh",
    "state_id": 7
  },
  {
    "district_id": 694,
    "district_name": "Sultanpur",
    "state_name": "Uttar Pradesh",
    "state_id": 34
  },
  {
    "district_id": 453,
    "district_name": "Sundargarh",
    "state_name": "Odisha",
    "state_id": 26
  },
  {
    "district_id": 72,
    "district_name": "Supaul",
    "state_name": "Bihar",
    "state_id": 5
  },
  {
    "district_id": 133,
    "district_name": "Surajpur",
    "state_name": "Chhattisgarh",
    "state_id": 7
  },
  {
    "district_id": 165,
    "district_name": "Surat",
    "state_name": "Gujarat",
    "state_id": 11
  },
  {
    "district_id": 776,
    "district_name": "Surat Corporation",
    "state_name": "Gujarat",
    "state_id": 11
  },
  {
    "district_id": 157,
    "district_name": "Surendranagar",
    "state_name": "Gujarat",
    "state_id": 11
  },
  {
    "district_id": 134,
    "district_name": "Surguja",
    "state_name": "Chhattisgarh",
    "state_id": 7
  },
  {
    "district_id": 606,
    "district_name": "Suryapet",
    "state_name": "Telangana",
    "state_id": 32
  },
  {
    "district_id": 404,
    "district_name": "Tamenglong",
    "state_name": "Manipur",
    "state_id": 22
  },
  {
    "district_id": 166,
    "district_name": "Tapi",
    "state_name": "Gujarat",
    "state_id": 11
  },
  {
    "district_id": 495,
    "district_name": "Tarn Taran",
    "state_name": "Punjab",
    "state_id": 28
  },
  {
    "district_id": 30,
    "district_name": "Tawang",
    "state_name": "Arunachal Pradesh",
    "state_id": 3
  },
  {
    "district_id": 701,
    "district_name": "Tehri Garhwal",
    "state_name": "Uttarakhand",
    "state_id": 35
  },
  {
    "district_id": 407,
    "district_name": "Tengnoupal",
    "state_name": "Manipur",
    "state_id": 22
  },
  {
    "district_id": 551,
    "district_name": "Tenkasi",
    "state_name": "Tamil Nadu",
    "state_id": 31
  },
  {
    "district_id": 392,
    "district_name": "Thane",
    "state_name": "Maharashtra",
    "state_id": 21
  },
  {
    "district_id": 541,
    "district_name": "Thanjavur",
    "state_name": "Tamil Nadu",
    "state_id": 31
  },
  {
    "district_id": 569,
    "district_name": "Theni",
    "state_name": "Tamil Nadu",
    "state_id": 31
  },
  {
    "district_id": 296,
    "district_name": "Thiruvananthapuram",
    "state_name": "Kerala",
    "state_id": 17
  },
  {
    "district_id": 554,
    "district_name": "Thoothukudi (Tuticorin)",
    "state_name": "Tamil Nadu",
    "state_id": 31
  },
  {
    "district_id": 405,
    "district_name": "Thoubal",
    "state_name": "Manipur",
    "state_id": 22
  },
  {
    "district_id": 303,
    "district_name": "Thrissur",
    "state_name": "Kerala",
    "state_id": 17
  },
  {
    "district_id": 325,
    "district_name": "Tikamgarh",
    "state_name": "Madhya Pradesh",
    "state_id": 20
  },
  {
    "district_id": 45,
    "district_name": "Tinsukia",
    "state_name": "Assam",
    "state_id": 4
  },
  {
    "district_id": 26,
    "district_name": "Tirap",
    "state_name": "Arunachal Pradesh",
    "state_id": 3
  },
  {
    "district_id": 560,
    "district_name": "Tiruchirappalli",
    "state_name": "Tamil Nadu",
    "state_id": 31
  },
  {
    "district_id": 548,
    "district_name": "Tirunelveli",
    "state_name": "Tamil Nadu",
    "state_id": 31
  },
  {
    "district_id": 550,
    "district_name": "Tirupattur",
    "state_name": "Tamil Nadu",
    "state_id": 31
  },
  {
    "district_id": 568,
    "district_name": "Tiruppur",
    "state_name": "Tamil Nadu",
    "state_id": 31
  },
  {
    "district_id": 572,
    "district_name": "Tiruvallur",
    "state_name": "Tamil Nadu",
    "state_id": 31
  },
  {
    "district_id": 553,
    "district_name": "Tiruvannamalai",
    "state_name": "Tamil Nadu",
    "state_id": 31
  },
  {
    "district_id": 574,
    "district_name": "Tiruvarur",
    "state_name": "Tamil Nadu",
    "state_id": 31
  },
  {
    "district_id": 526,
    "district_name": "Tonk",
    "state_name": "Rajasthan",
    "state_id": 29
  },
  {
    "district_id": 440,
    "district_name": "Tuensang",
    "state_name": "Nagaland",
    "state_id": 25
  },
  {
    "district_id": 288,
    "district_name": "Tumkur",
    "state_name": "Karnataka",
    "state_id": 16
  },
  {
    "district_id": 504,
    "district_name": "Udaipur",
    "state_name": "Rajasthan",
    "state_id": 29
  },
  {
    "district_id": 65,
    "district_name": "Udalguri",
    "state_name": "Assam",
    "state_id": 4
  },
  {
    "district_id": 705,
    "district_name": "Udham Singh Nagar",
    "state_name": "Uttarakhand",
    "state_id": 35
  },
  {
    "district_id": 233,
    "district_name": "Udhampur",
    "state_name": "Jammu and Kashmir",
    "state_id": 14
  },
  {
    "district_id": 286,
    "district_name": "Udupi",
    "state_name": "Karnataka",
    "state_id": 16
  },
  {
    "district_id": 318,
    "district_name": "Ujjain",
    "state_name": "Madhya Pradesh",
    "state_id": 20
  },
  {
    "district_id": 406,
    "district_name": "Ukhrul",
    "state_name": "Manipur",
    "state_id": 22
  },
  {
    "district_id": 329,
    "district_name": "Umaria",
    "state_name": "Madhya Pradesh",
    "state_id": 20
  },
  {
    "district_id": 218,
    "district_name": "Una",
    "state_name": "Himachal Pradesh",
    "state_id": 13
  },
  {
    "district_id": 620,
    "district_name": "Unakoti",
    "state_name": "Tripura",
    "state_id": 33
  },
  {
    "district_id": 695,
    "district_name": "Unnao",
    "state_name": "Uttar Pradesh",
    "state_id": 34
  },
  {
    "district_id": 34,
    "district_name": "Upper Siang",
    "state_name": "Arunachal Pradesh",
    "state_id": 3
  },
  {
    "district_id": 41,
    "district_name": "Upper Subansiri",
    "state_name": "Arunachal Pradesh",
    "state_id": 3
  },
  {
    "district_id": 736,
    "district_name": "Uttar Dinajpur",
    "state_name": "West Bengal",
    "state_id": 36
  },
  {
    "district_id": 281,
    "district_name": "Uttar Kannada",
    "state_name": "Karnataka",
    "state_id": 16
  },
  {
    "district_id": 703,
    "district_name": "Uttarkashi",
    "state_name": "Uttarakhand",
    "state_id": 35
  },
  {
    "district_id": 155,
    "district_name": "Vadodara",
    "state_name": "Gujarat",
    "state_id": 11
  },
  {
    "district_id": 777,
    "district_name": "Vadodara Corporation",
    "state_name": "Gujarat",
    "state_id": 11
  },
  {
    "district_id": 89,
    "district_name": "Vaishali",
    "state_name": "Bihar",
    "state_id": 5
  },
  {
    "district_id": 167,
    "district_name": "Valsad",
    "state_name": "Gujarat",
    "state_id": 11
  },
  {
    "district_id": 696,
    "district_name": "Varanasi",
    "state_name": "Uttar Pradesh",
    "state_id": 34
  },
  {
    "district_id": 543,
    "district_name": "Vellore",
    "state_name": "Tamil Nadu",
    "state_id": 31
  },
  {
    "district_id": 355,
    "district_name": "Vidisha",
    "state_name": "Madhya Pradesh",
    "state_id": 20
  },
  {
    "district_id": 293,
    "district_name": "Vijayapura",
    "state_name": "Karnataka",
    "state_id": 16
  },
  {
    "district_id": 607,
    "district_name": "Vikarabad",
    "state_name": "Telangana",
    "state_id": 32
  },
  {
    "district_id": 542,
    "district_name": "Viluppuram",
    "state_name": "Tamil Nadu",
    "state_id": 31
  },
  {
    "district_id": 549,
    "district_name": "Virudhunagar",
    "state_name": "Tamil Nadu",
    "state_id": 31
  },
  {
    "district_id": 8,
    "district_name": "Visakhapatnam",
    "state_name": "Andhra Pradesh",
    "state_id": 2
  },
  {
    "district_id": 15,
    "district_name": "Vizianagaram",
    "state_name": "Andhra Pradesh",
    "state_id": 2
  },
  {
    "district_id": 608,
    "district_name": "Wanaparthy",
    "state_name": "Telangana",
    "state_id": 32
  },
  {
    "district_id": 609,
    "district_name": "Warangal(Rural)",
    "state_name": "Telangana",
    "state_id": 32
  },
  {
    "district_id": 610,
    "district_name": "Warangal(Urban)",
    "state_name": "Telangana",
    "state_id": 32
  },
  {
    "district_id": 377,
    "district_name": "Wardha",
    "state_name": "Maharashtra",
    "state_id": 21
  },
  {
    "district_id": 369,
    "district_name": "Washim",
    "state_name": "Maharashtra",
    "state_id": 21
  },
  {
    "district_id": 299,
    "district_name": "Wayanad",
    "state_name": "Kerala",
    "state_id": 17
  },
  {
    "district_id": 737,
    "district_name": "West Bardhaman",
    "state_name": "West Bengal",
    "state_id": 36
  },
  {
    "district_id": 106,
    "district_name": "West Champaran",
    "state_name": "Bihar",
    "state_id": 5
  },
  {
    "district_id": 142,
    "district_name": "West Delhi",
    "state_name": "Delhi",
    "state_id": 9
  },
  {
    "district_id": 420,
    "district_name": "West Garo Hills",
    "state_name": "Meghalaya",
    "state_id": 23
  },
  {
    "district_id": 16,
    "district_name": "West Godavari",
    "state_name": "Andhra Pradesh",
    "state_id": 2
  },
  {
    "district_id": 416,
    "district_name": "West Jaintia Hills",
    "state_name": "Meghalaya",
    "state_id": 23
  },
  {
    "district_id": 28,
    "district_name": "West Kameng",
    "state_name": "Arunachal Pradesh",
    "state_id": 3
  },
  {
    "district_id": 769,
    "district_name": "West Karbi Anglong",
    "state_name": "Assam",
    "state_id": 4
  },
  {
    "district_id": 419,
    "district_name": "West Khasi Hills",
    "state_name": "Meghalaya",
    "state_id": 23
  },
  {
    "district_id": 38,
    "district_name": "West Siang",
    "state_name": "Arunachal Pradesh",
    "state_id": 3
  },
  {
    "district_id": 536,
    "district_name": "West Sikkim",
    "state_name": "Sikkim",
    "state_id": 30
  },
  {
    "district_id": 263,
    "district_name": "West Singhbhum",
    "state_name": "Jharkhand",
    "state_id": 15
  },
  {
    "district_id": 621,
    "district_name": "West Tripura",
    "state_name": "Tripura",
    "state_id": 33
  },
  {
    "district_id": 436,
    "district_name": "Wokha",
    "state_name": "Nagaland",
    "state_id": 25
  },
  {
    "district_id": 611,
    "district_name": "Yadadri Bhuvanagiri",
    "state_name": "Telangana",
    "state_id": 32
  },
  {
    "district_id": 285,
    "district_name": "Yadgir",
    "state_name": "Karnataka",
    "state_id": 16
  },
  {
    "district_id": 197,
    "district_name": "Yamunanagar",
    "state_name": "Haryana",
    "state_id": 12
  },
  {
    "district_id": 478,
    "district_name": "Yanam",
    "state_name": "Puducherry",
    "state_id": 27
  },
  {
    "district_id": 368,
    "district_name": "Yavatmal",
    "state_name": "Maharashtra",
    "state_id": 21
  },
  {
    "district_id": 6,
    "district_name": "YSR District, Kadapa (Cuddapah)",
    "state_name": "Andhra Pradesh",
    "state_id": 2
  },
  {
    "district_id": 442,
    "district_name": "Zunheboto",
    "state_name": "Nagaland",
    "state_id": 25
  }
]

const $district = $('#district')

$.each(districts, function(i, d) {
  $district.append($('<option>', {
    value: d.district_name + ', ' + d.state_name,
    text: d.district_id,
    label: d.district_name + ', ' + d.state_name
  }))
})

/*
function getFreshDistricts() {
  const districts = []
  for (let s in states) {
    const res = await axios({
      method: 'get',
      url: `admin/location/districts/${states[s]}`
    })
    const ds = res.data['districts']
    for (let d of ds) {
      d['state_name'] = s;
      d['state_id'] = states[s];
      districts.push(d)
    }
  }
  districts.sort((d1, d2) => d1['district_name'].localeCompare(d2['district_name']))
  console.log(districts)
}
*/
