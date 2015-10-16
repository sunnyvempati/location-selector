// state map

let state_abbr = {
  'AL' : 'Alabama',
  'AK' : 'Alaska',
  'AS' : 'America Samoa',
  'AZ' : 'Arizona',
  'AR' : 'Arkansas',
  'CA' : 'California',
  'CO' : 'Colorado',
  'CT' : 'Connecticut',
  'DE' : 'Delaware',
  'DC' : 'District of Columbia',
  'FM' : 'Micronesia',
  'FL' : 'Florida',
  'GA' : 'Georgia',
  'GU' : 'Guam',
  'HI' : 'Hawaii',
  'ID' : 'Idaho',
  'IL' : 'Illinois',
  'IN' : 'Indiana',
  'IA' : 'Iowa',
  'KS' : 'Kansas',
  'KY' : 'Kentucky',
  'LA' : 'Louisiana',
  'ME' : 'Maine',
  'MH' : 'Marshall Islands',
  'MD' : 'Maryland',
  'MA' : 'Massachusetts',
  'MI' : 'Michigan',
  'MN' : 'Minnesota',
  'MS' : 'Mississippi',
  'MO' : 'Missouri',
  'MT' : 'Montana',
  'NE' : 'Nebraska',
  'NV' : 'Nevada',
  'NH' : 'New Hampshire',
  'NJ' : 'New Jersey',
  'NM' : 'New Mexico',
  'NY' : 'New York',
  'NC' : 'North Carolina',
  'ND' : 'North Dakota',
  'OH' : 'Ohio',
  'OK' : 'Oklahoma',
  'OR' : 'Oregon',
  'PW' : 'Palau',
  'PA' : 'Pennsylvania',
  'PR' : 'Puerto Rico',
  'RI' : 'Rhode Island',
  'SC' : 'South Carolina',
  'SD' : 'South Dakota',
  'TN' : 'Tennessee',
  'TX' : 'Texas',
  'UT' : 'Utah',
  'VT' : 'Vermont',
  'VI' : 'Virgin Island',
  'VA' : 'Virginia',
  'WA' : 'Washington',
  'WV' : 'West Virginia',
  'WI' : 'Wisconsin',
  'WY' : 'Wyoming'
}

export default function getStateName(abbr) {
  return state_abbr[abbr];
}
