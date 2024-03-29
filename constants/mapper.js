const propertyTypeMapper = {
    ['Condo']: 'Condo',
    ['Apartment']: 'Condo',
    ['Semi-detached House']: 'Home',
    ['House']: 'Home',
    ['Serviced Apartment']: 'Hotel_apartment',
    ['Townhouse']: 'Townhome',
    ['Villa']: 'Home',
    ['Penthouse']: 'Condo',
    ['Duplex']: 'Condo',
    ['Land']: 'Land',
    ['Commercial']: 'Commercial'
}

const petAllowedMapper = {
    ['Small Pet Allowed']: 'Allow',
    ['Medium Pet Allowed']: 'Allow',
    ['Not Allowed']: '',
}

const listingOwnerMapper = {
    ['Landlord']: 'Owner',
    ['landlord']: 'Owner',
    ['Agent']: 'Agent',
    ['agent']: 'Agent',
}

const listingTypeMapper = {
    ['Rent']: 'Rent',
    ['Sell']: 'Sell',
    ['Rent/Sell']: 'buy/sell',
}

const zoneIdMapper = {
    ['Ari']: 8,
    ['Asoke']: 18,
    ['Bang Chak']: 19,
    ['Bang Na']: 20,
    ['Bearing']: 20,
    ['Saphan Taksin']: 26,
    ['Chatuchak']: 9,
    ['Chit Lom']: 6,
    ['Chong Nonsi']: 24,
    ['Huai Khwang']: 13,
    ['Krung Thon Buri']: 26,
    ['Lat Phrao']: 10,
    ['Lumphini']: 6,
    ['Mo Chit']: 9,
    ['Nana']: 17,
    ['National Stadium']: 5,
    ['On Nut']: 19,
    ['Phaya Thai']: 7,
    ['Phloen Chit']: 6,
    ['Phra Khanong']: 19,
    ['Phra Ram 9']: 14,
    ['Phrom Phong']: 18,
    ['Punnawithi']: 19,
    ['Phromphong']: 18,
    ['Thonglor']: 18,
    ['Ekkamai']: 18,
    ['Huaikwang']: 13,
    ['Rama9']: 14,
    ['Ploenchit']: 6,
    ['Ratchada']: 13,
    ['Samyan']: 5,
    ['Silom/Saladaeng']: 22,
    ['Chongnonsri/Sathorn']: 24,
    ['Krungthonburi']: 26,
    ['Onnut/Phrakanong']: 19,
    ['Queen Sirikit']: 23,
    ['Ramkhamhaeng']: 31,
    ['Ratchadamri']: 6,
    ['Ratchadaphisek']: 13,
    ['Ratchaprarob']: 7,
    ['Ratchaprarop']: 7,
    ['Ratchathewi']: 7,
    ['Saint Louis']: 24,
    ['Sala Daeng']: 22,
    ['SalaDaeng']: 22,
    ['Sam Yan']: 5,
    ['Sanam Pao']: 8,
    ['Saphan Khwai']: 9,
    ['Silom']: 22,
    ['Surasak']: 24,
    ['Sutthisan']: 13,
    ['Tao Poon']: 39,
    ['Thailand Cultural Centre']: 13,
    ['Thong Lor']: 18,
    ['Udom Suk']: 19,
    ['Victory Monument']: 8,
    ['Wong Sawang']: 39,
    ['Wongwian Yai']: 26
}

const listingMap = {
    'Action': 'action',
    'SKU': 'sku',
    'building_type': 'building_type',
    'PostType': 'postType',
    'PostFrom': 'postFrom',
    'ostAcceptAgent': 'ostAcceptAgent',
    'Zone ID': 'zoneId',
    'Project ID': 'projectId',
    'Title TH': 'titleTH',
    'Content TH': 'contentTH',
    'Title EN': 'titleEN',
    'Content EN': 'contentEN',
    'Price': 'price',
    'AreaSize': 'areaSize',
    'Area_rai': 'area_rai',
    'Area_ngan': 'area_ngan',
    'Area_wa': 'area_wa',
    'Floor': 'floor',
    'Room': 'room',
    'Bathroom': 'bathroom',
    'pet_allowed': 'pet_allowed',
    'fq': 'fq',
    'youtube': 'youtube',
    'latitude': 'latitude',
    'longitude': 'longitude',
    'Picture1': 'picture1',
    'Picture2': 'picture2',
    'Picture3': 'picture3',
    'Picture4': 'picture4',
    'Picture5': 'picture5',
    'Picture6': 'picture6',
    'Picture7': 'picture7',
    'Picture8': 'picture8',
    'Picture9': 'picture9',
    'Picture10': 'picture10',
    'Picture11': 'picture11',
    'Picture12': 'picture12',
    'Useful space': 'usefulSpace',
    'Income Avg./Year': 'incomeAvgPerYear',
    'Email': 'email',
    'Line ID': 'lineId',
    'Tel.': 'tel',
    'Name': 'name',
    'Whatsapp': 'whatsapp',
    'Facebook Messenger': 'facebookMessenger',
    'Wechat': 'wechat',
    'External Data Source': 'externalDataSource',
    'Facing direction': 'facingDirection',
    'Unit Number': 'unitNumber',
    'Property Type': 'propertyType',
    'Feedback Checked': 'feedbackChecked',
    'Listed On': 'listedOn',
    'Building year': 'buildingYear',
    'Availability': 'availability',
    'PS Code': 'psCode',
    'Area:': 'area'
}

module.exports = {
    propertyTypeMapper,
    petAllowedMapper,
    listingOwnerMapper,
    listingTypeMapper,
    zoneIdMapper,
    listingMap
}

