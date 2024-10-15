import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import home1 from '../assets/images/home 1.jpg';
import { IoBedOutline } from "react-icons/io5";
import { LiaBathSolid } from "react-icons/lia";
import { GiHomeGarage } from "react-icons/gi";
import MarkerClusterGroup from "react-leaflet-cluster";
import 'react-leaflet-markercluster/dist/styles.min.css';

// Assuming Data is defined and contains listings
const Data = {
    "page": 1,
    "numPages": 1,
    "pageSize": 100,
    "count": 15,
    "statistics": {
        "listPrice": {
            "min": 12,
            "max": 3160000
        }
    },
    "listings": [
        {
            "mlsNumber": "N9394039",
            "resource": "Property:2381",
            "status": "A",
            "class": "CommercialProperty",
            "type": "Sale",
            "listPrice": "3160000.00",
            "listDate": "2024-10-12T07:25:39.000Z",
            "lastStatus": "New",
            "soldPrice": null,
            "soldDate": null,
            "originalPrice": "3160000.00",
            "assignment": null,
            "address": {
                "area": "York",
                "city": "Georgina",
                "country": "Canada",
                "district": "Georgina",
                "majorIntersection": "Riverglen/ The Queensway",
                "neighborhood": "Keswick South",
                "streetDirection": "",
                "streetName": "Mac",
                "streetNumber": "8",
                "streetSuffix": "Ave",
                "unitNumber": "",
                "zip": "L4P 3W5",
                "state": "Ontario",
                "communityCode": null,
                "streetDirectionPrefix": null
            },
            "map": {
                "latitude": "44.2266207",
                "longitude": "-79.4653374",
                "point": "POINT (-79.4653374 44.2266207)"
            },
            "permissions": {
                "displayAddressOnInternet": "Y",
                "displayPublic": "Y",
                "displayInternetEntireListing": "Y"
            },
            "images": [
                "IMG-N9394039_1.jpg",
                "IMG-N9394039_2.jpg",
                "IMG-N9394039_3.jpg",
                "IMG-N9394039_4.jpg",
                "IMG-N9394039_5.jpg",
                "IMG-N9394039_6.jpg",
                "IMG-N9394039_7.jpg",
                "IMG-N9394039_8.jpg",
                "IMG-N9394039_9.jpg",
                "IMG-N9394039_10.jpg",
                "IMG-N9394039_11.jpg"
            ],
            "photoCount": 11,
            "details": {
                "airConditioning": "N",
                "basement1": "N",
                "basement2": null,
                "centralVac": null,
                "den": null,
                "description": "Attention all  Investors! Commercial Zoned Land with Lots of potential. Property Currently has 20 Boat Slips With Existing boater clientele. Land area can be building 6 Townhouses on water. Land Located On Maskononge River Direct Access To Lake Simcoe With Docking For Large Boats. Perfect Spot For The Boating Enthusiast, Fisherman & Investor. All Year round Income includes but nor limits to Boat Parking, Ice Fishing , Water Activities and etc.",
                "elevator": "",
                "exteriorConstruction1": null,
                "exteriorConstruction2": null,
                "extras": "",
                "furnished": null,
                "garage": "Outside/Surface",
                "heating": "None",
                "numBathrooms": "",
                "numBathroomsPlus": null,
                "numBedrooms": null,
                "numBedroomsPlus": null,
                "numFireplaces": null,
                "numGarageSpaces": null,
                "numParkingSpaces": "10",
                "numRooms": null,
                "numRoomsPlus": null,
                "patio": null,
                "propertyType": "Investment",
                "sqft": null,
                "style": "Recreational",
                "swimmingPool": null,
                "virtualTourUrl": "",
                "yearBuilt": "",
                "landAccessType": null,
                "landSewer": null,
                "viewType": null,
                "zoningDescription": null,
                "analyticsClick": null,
                "moreInformationLink": null,
                "alternateURLVideoLink": null,
                "flooringType": null,
                "foundationType": null,
                "landscapeFeatures": null,
                "fireProtection": null,
                "roofMaterial": null,
                "farmType": null,
                "zoningType": null,
                "businessType": null,
                "businessSubType": null,
                "landDisposition": null,
                "storageType": null,
                "constructionStyleSplitLevel": null,
                "constructionStatus": null,
                "loadingType": null,
                "ceilingType": null,
                "liveStreamEventURL": null,
                "energuideRating": null,
                "amperage": null,
                "sewer": "",
                "familyRoom": null,
                "zoning": "C5",
                "driveway": null,
                "leaseTerms": null,
                "centralAirConditioning": null,
                "certificationLevel": "",
                "energyCertification": "",
                "parkCostMonthly": null,
                "commonElementsIncluded": null,
                "greenPropertyInformationStatement": "",
                "handicappedEquipped": "",
                "laundryLevel": null,
                "numKitchens": null,
                "numKitchensPlus": null,
                "sqftRange": null,
                "numDrivewaySpaces": null,
                "HOAFee": null,
                "HOAFee2": null,
                "HOAFee3": null,
                "waterSource": "None",
                "livingAreaMeasurement": null,
                "waterfront": null,
                "bathrooms": {
                    "1": {
                        "level": null,
                        "count": null,
                        "pieces": null
                    },
                    "2": {
                        "level": null,
                        "count": null,
                        "pieces": null
                    },
                    "3": {
                        "level": null,
                        "count": null,
                        "pieces": null
                    },
                    "4": {
                        "level": null,
                        "count": null,
                        "pieces": null
                    },
                    "5": {
                        "level": null,
                        "count": null,
                        "pieces": null
                    }
                },
                "numBathroomsHalf": null
            },
            "daysOnMarket": "0",
            "occupancy": "",
            "updatedOn": "2024-10-12T07:25:39.000Z",
            "condominium": {
                "ammenities": [],
                "buildingInsurance": null,
                "condoCorp": null,
                "condoCorpNum": null,
                "exposure": null,
                "lockerNumber": "",
                "locker": null,
                "parkingType": null,
                "pets": null,
                "propertyMgr": null,
                "stories": null,
                "fees": {
                    "cableInlc": null,
                    "heatIncl": "",
                    "hydroIncl": "",
                    "maintenance": "",
                    "parkingIncl": null,
                    "taxesIncl": null,
                    "waterIncl": null
                },
                "lockerUnitNumber": null,
                "ensuiteLaundry": null,
                "sharesPercentage": null,
                "lockerLevel": null,
                "unitNumber": null
            },
            "coopCompensation": null,
            "lot": {
                "acres": null,
                "depth": "165.00",
                "irregular": "Irregular",
                "legalDescription": "See Below",
                "measurement": "Feet",
                "width": "91.82",
                "size": null
            },
            "nearby": {
                "ammenities": []
            },
            "office": {
                "brokerageName": "HOMELIFE NEW WORLD REALTY INC."
            },
            "openHouse": {
                "1": {
                    "date": "",
                    "startTime": "",
                    "endTime": "",
                    "type": null,
                    "status": null,
                    "TZ": "ET"
                },
                "2": {
                    "date": "",
                    "startTime": "",
                    "endTime": "",
                    "type": null,
                    "status": null,
                    "TZ": "ET"
                },
                "3": {
                    "date": "",
                    "startTime": "",
                    "endTime": "",
                    "type": null,
                    "status": null,
                    "TZ": "ET"
                }
            },
            "rooms": {
                "1": {
                    "features": null,
                    "level": null,
                    "length": null,
                    "width": null,
                    "description": null,
                    "features3": null,
                    "features2": null
                },
                "2": {
                    "features": null,
                    "level": null,
                    "length": null,
                    "width": null,
                    "description": null,
                    "features3": null,
                    "features2": null
                },
                "3": {
                    "features": null,
                    "level": null,
                    "length": null,
                    "width": null,
                    "description": null,
                    "features3": null,
                    "features2": null
                },
                "4": {
                    "features": null,
                    "level": null,
                    "length": null,
                    "width": null,
                    "description": null,
                    "features3": null,
                    "features2": null
                },
                "5": {
                    "features": null,
                    "level": null,
                    "length": null,
                    "width": null,
                    "description": null,
                    "features3": null,
                    "features2": null
                },
                "6": {
                    "features": null,
                    "level": null,
                    "length": null,
                    "width": null,
                    "description": null,
                    "features3": null,
                    "features2": null
                },
                "7": {
                    "features": null,
                    "level": null,
                    "length": null,
                    "width": null,
                    "description": null,
                    "features3": null,
                    "features2": null
                },
                "8": {
                    "features": null,
                    "level": null,
                    "length": null,
                    "width": null,
                    "description": null,
                    "features3": null,
                    "features2": null
                },
                "9": {
                    "features": null,
                    "level": null,
                    "length": null,
                    "width": null,
                    "description": null,
                    "features3": null,
                    "features2": null
                },
                "10": {
                    "features": null,
                    "level": null,
                    "length": null,
                    "width": null,
                    "description": null,
                    "features3": null,
                    "features2": null
                },
                "11": {
                    "features": null,
                    "level": null,
                    "length": null,
                    "width": null,
                    "description": null,
                    "features3": null,
                    "features2": null
                },
                "12": {
                    "features": null,
                    "level": null,
                    "length": null,
                    "width": null,
                    "description": null,
                    "features3": null,
                    "features2": null
                }
            },
            "taxes": {
                "annualAmount": "10042.93",
                "assessmentYear": "2024"
            },
            "timestamps": {
                "idxUpdated": "2024-10-12T12:00:26.000Z",
                "listingUpdated": "2024-10-12T07:25:39.000Z",
                "photosUpdated": "2024-10-12T07:25:39.000Z",
                "conditionalExpiryDate": null,
                "terminatedDate": null,
                "suspendedDate": null,
                "listingEntryDate": null,
                "closedDate": null,
                "unavailableDate": null,
                "expiryDate": null,
                "extensionEntryDate": null,
                "possessionDate": "2024-10-15T00:00:00.000Z",
                "repliersUpdatedOn": "2024-10-12T14:02:54.784Z"
            },
            "agents": [],
            "commercial": {
                "amps": "",
                "areaInfluences": {
                    "1": "Major Highway",
                    "2": ""
                },
                "baySize": {
                    "1": {
                        "inches": "",
                        "feet": ""
                    },
                    "2": {
                        "inches": "",
                        "feet": ""
                    }
                },
                "expenses": {
                    "operating": "",
                    "yearly": "",
                    "insurance": "",
                    "maintenance": "",
                    "management": "",
                    "water": ""
                },
                "businessType": "Marina",
                "ceilingHeightInches": "",
                "ceilingHeightFeet": "",
                "chattels": "",
                "commonAreaUpcharge": "",
                "communityCode": "09.09.0030",
                "crane": "",
                "energyCertified": "",
                "financialStatementsAvailable": "",
                "franchise": "",
                "freestanding": "Y",
                "greenPropertyInfoStatement": "",
                "grossSalesIncome": "",
                "handicapEquipped": "",
                "operatingHours": "",
                "industrialArea": "",
                "industrialAreaCode": "",
                "inventoryValuesAtCost": "",
                "llbo": "",
                "lotCode": "Lot",
                "listPriceCode": "For Sale",
                "minLeaseTermMonths": "",
                "officeArea": "",
                "officeAreaCode": "",
                "outsideStorage": "",
                "outOfAreaMunicipality": "",
                "percentageBuilding": "",
                "percentageRent": "",
                "rail": "",
                "retailArea": "",
                "retailAreaCode": "",
                "sewer": "",
                "shippingDoors": {
                    "driveIn": {
                        "heightFeet": "",
                        "heightInches": "",
                        "number": "",
                        "widthFeet": "",
                        "widthInches": ""
                    },
                    "doubleMan": {
                        "heightFeet": "",
                        "heightInches": "",
                        "number": "",
                        "widthFeet": "",
                        "widthInches": ""
                    },
                    "gradeLevel": {
                        "heightFeet": "",
                        "heightInches": "",
                        "number": "",
                        "widthFeet": "",
                        "widthInches": ""
                    },
                    "truckLevel": {
                        "heightFeet": "",
                        "heightInches": "",
                        "number": "",
                        "widthFeet": "",
                        "widthInches": ""
                    }
                },
                "soilTest": "",
                "sprinklers": "",
                "survey": "",
                "maxLeaseTermMonths": "",
                "totalAreaCode": "Acres",
                "trailerParkingSpots": "",
                "assessment": "",
                "taxType": "Annual",
                "uffi": "",
                "utilities": "N",
                "vacancyAllowance": "",
                "sellerPropertyInfoStatement": "N",
                "volts": "",
                "water": "None",
                "waterSupplyType": "",
                "zoning": "C5"
            },
            "boardId": 2
        },
        {
            "mlsNumber": "N9394036",
            "resource": "Property:2381",
            "status": "A",
            "class": "CommercialProperty",
            "type": "Sale",
            "listPrice": "3160000.00",
            "listDate": "2024-10-12T07:18:52.000Z",
            "lastStatus": "New",
            "soldPrice": null,
            "soldDate": null,
            "originalPrice": "3160000.00",
            "assignment": null,
            "address": {
                "area": "York",
                "city": "Georgina",
                "country": "Canada",
                "district": "Georgina",
                "majorIntersection": "Riverglen/ The Queensway",
                "neighborhood": "Keswick South",
                "streetDirection": "",
                "streetName": "Mac",
                "streetNumber": "8&12",
                "streetSuffix": "Ave",
                "unitNumber": "",
                "zip": "L4P 3W5",
                "state": "Ontario",
                "communityCode": null,
                "streetDirectionPrefix": null
            },
            "map": {
                "latitude": "44.2263898",
                "longitude": "-79.465487",
                "point": "POINT (-79.465487 44.2263898)"
            },
            "permissions": {
                "displayAddressOnInternet": "Y",
                "displayPublic": "Y",
                "displayInternetEntireListing": "Y"
            },
            "images": [
                "IMG-N9394036_1.jpg",
                "IMG-N9394036_2.jpg",
                "IMG-N9394036_3.jpg",
                "IMG-N9394036_4.jpg",
                "IMG-N9394036_5.jpg",
                "IMG-N9394036_6.jpg",
                "IMG-N9394036_7.jpg",
                "IMG-N9394036_8.jpg",
                "IMG-N9394036_9.jpg",
                "IMG-N9394036_10.jpg",
                "IMG-N9394036_11.jpg",
                "IMG-N9394036_12.jpg",
                "IMG-N9394036_13.jpg",
                "IMG-N9394036_14.jpg",
                "IMG-N9394036_15.jpg",
                "IMG-N9394036_16.jpg",
                "IMG-N9394036_17.jpg",
                "IMG-N9394036_18.jpg",
                "IMG-N9394036_19.jpg",
                "IMG-N9394036_20.jpg",
                "IMG-N9394036_21.jpg",
                "IMG-N9394036_22.jpg",
                "IMG-N9394036_23.jpg",
                "IMG-N9394036_24.jpg",
                "IMG-N9394036_25.jpg",
                "IMG-N9394036_26.jpg",
                "IMG-N9394036_27.jpg",
                "IMG-N9394036_28.jpg",
                "IMG-N9394036_29.jpg",
                "IMG-N9394036_30.jpg",
                "IMG-N9394036_31.jpg",
                "IMG-N9394036_32.jpg",
                "IMG-N9394036_33.jpg",
                "IMG-N9394036_34.jpg",
                "IMG-N9394036_35.jpg",
                "IMG-N9394036_36.jpg",
                "IMG-N9394036_37.jpg",
                "IMG-N9394036_38.jpg",
                "IMG-N9394036_39.jpg",
                "IMG-N9394036_40.jpg"
            ],
            "photoCount": 40,
            "details": {
                "airConditioning": "N",
                "basement1": "N",
                "basement2": null,
                "centralVac": null,
                "den": null,
                "description": "Welcome to 1.82 acre waterfront tourist commercial zoned marina properties, Area including land, water and road Total Approximately 7362 square meters.  Beautiful Waterfront Property On Maskononge River Direct Access To Lake Simcoe With  Docking For Large Boats. Perfect Spot For The Boating Enthusiast, Fisherman & Investor. Property Currently Offers Main Living Area With View Of River, Including 2 Covered Boat Slips, 3 Apartments with 3 Washrooms and 2 Kitchens. Airbnb and Water Activities Income Year round. 20 Boat Slips With Existing boater clientele. Land area can be built 6 Townhouses on water. This Waterfront Commercial Land with Lots of potential.  5 mins to Walmart, Banks, Grocery stores, Shops, Restaurants, 5 mins to HWY 404, Land development Townhouse Rendering attached",
                "elevator": "",
                "exteriorConstruction1": null,
                "exteriorConstruction2": null,
                "extras": "S/S Appliances, Fridges [2], Stove [2], Microwave [1], Range Hood [1] , Washer & Dryer [1]Set. Window Covers, exiting keys",
                "furnished": null,
                "garage": "None",
                "heating": "Gas Forced Air Open",
                "numBathrooms": "",
                "numBathroomsPlus": null,
                "numBedrooms": null,
                "numBedroomsPlus": null,
                "numFireplaces": null,
                "numGarageSpaces": null,
                "numParkingSpaces": "",
                "numRooms": null,
                "numRoomsPlus": null,
                "patio": null,
                "propertyType": "Investment",
                "sqft": null,
                "style": "Recreational",
                "swimmingPool": null,
                "virtualTourUrl": "",
                "yearBuilt": "",
                "landAccessType": null,
                "landSewer": null,
                "viewType": null,
                "zoningDescription": null,
                "analyticsClick": null,
                "moreInformationLink": null,
                "alternateURLVideoLink": null,
                "flooringType": null,
                "foundationType": null,
                "landscapeFeatures": null,
                "fireProtection": null,
                "roofMaterial": null,
                "farmType": null,
                "zoningType": null,
                "businessType": null,
                "businessSubType": null,
                "landDisposition": null,
                "storageType": null,
                "constructionStyleSplitLevel": null,
                "constructionStatus": null,
                "loadingType": null,
                "ceilingType": null,
                "liveStreamEventURL": null,
                "energuideRating": null,
                "amperage": null,
                "sewer": "",
                "familyRoom": null,
                "zoning": "C5",
                "driveway": null,
                "leaseTerms": null,
                "centralAirConditioning": null,
                "certificationLevel": "",
                "energyCertification": "",
                "parkCostMonthly": null,
                "commonElementsIncluded": null,
                "greenPropertyInformationStatement": "",
                "handicappedEquipped": "",
                "laundryLevel": null,
                "numKitchens": null,
                "numKitchensPlus": null,
                "sqftRange": null,
                "numDrivewaySpaces": null,
                "HOAFee": null,
                "HOAFee2": null,
                "HOAFee3": null,
                "waterSource": "Municipal",
                "livingAreaMeasurement": null,
                "waterfront": null,
                "bathrooms": {
                    "1": {
                        "level": null,
                        "count": null,
                        "pieces": null
                    },
                    "2": {
                        "level": null,
                        "count": null,
                        "pieces": null
                    },
                    "3": {
                        "level": null,
                        "count": null,
                        "pieces": null
                    },
                    "4": {
                        "level": null,
                        "count": null,
                        "pieces": null
                    },
                    "5": {
                        "level": null,
                        "count": null,
                        "pieces": null
                    }
                },
                "numBathroomsHalf": null
            },
            "daysOnMarket": "0",
            "occupancy": "",
            "updatedOn": "2024-10-12T07:18:52.000Z",
            "condominium": {
                "ammenities": [],
                "buildingInsurance": null,
                "condoCorp": null,
                "condoCorpNum": null,
                "exposure": null,
                "lockerNumber": "",
                "locker": null,
                "parkingType": null,
                "pets": null,
                "propertyMgr": null,
                "stories": null,
                "fees": {
                    "cableInlc": null,
                    "heatIncl": "",
                    "hydroIncl": "",
                    "maintenance": "",
                    "parkingIncl": null,
                    "taxesIncl": null,
                    "waterIncl": null
                },
                "lockerUnitNumber": null,
                "ensuiteLaundry": null,
                "sharesPercentage": null,
                "lockerLevel": null,
                "unitNumber": null
            },
            "coopCompensation": null,
            "lot": {
                "acres": null,
                "depth": "165.00",
                "irregular": "Irregular",
                "legalDescription": "See Below",
                "measurement": "Feet",
                "width": "91.82",
                "size": null
            },
            "nearby": {
                "ammenities": []
            },
            "office": {
                "brokerageName": "HOMELIFE NEW WORLD REALTY INC."
            },
            "openHouse": {
                "1": {
                    "date": "",
                    "startTime": "",
                    "endTime": "",
                    "type": null,
                    "status": null,
                    "TZ": "ET"
                },
                "2": {
                    "date": "",
                    "startTime": "",
                    "endTime": "",
                    "type": null,
                    "status": null,
                    "TZ": "ET"
                },
                "3": {
                    "date": "",
                    "startTime": "",
                    "endTime": "",
                    "type": null,
                    "status": null,
                    "TZ": "ET"
                }
            },
            "rooms": {
                "1": {
                    "features": null,
                    "level": null,
                    "length": null,
                    "width": null,
                    "description": null,
                    "features3": null,
                    "features2": null
                },
                "2": {
                    "features": null,
                    "level": null,
                    "length": null,
                    "width": null,
                    "description": null,
                    "features3": null,
                    "features2": null
                },
                "3": {
                    "features": null,
                    "level": null,
                    "length": null,
                    "width": null,
                    "description": null,
                    "features3": null,
                    "features2": null
                },
                "4": {
                    "features": null,
                    "level": null,
                    "length": null,
                    "width": null,
                    "description": null,
                    "features3": null,
                    "features2": null
                },
                "5": {
                    "features": null,
                    "level": null,
                    "length": null,
                    "width": null,
                    "description": null,
                    "features3": null,
                    "features2": null
                },
                "6": {
                    "features": null,
                    "level": null,
                    "length": null,
                    "width": null,
                    "description": null,
                    "features3": null,
                    "features2": null
                },
                "7": {
                    "features": null,
                    "level": null,
                    "length": null,
                    "width": null,
                    "description": null,
                    "features3": null,
                    "features2": null
                },
                "8": {
                    "features": null,
                    "level": null,
                    "length": null,
                    "width": null,
                    "description": null,
                    "features3": null,
                    "features2": null
                },
                "9": {
                    "features": null,
                    "level": null,
                    "length": null,
                    "width": null,
                    "description": null,
                    "features3": null,
                    "features2": null
                },
                "10": {
                    "features": null,
                    "level": null,
                    "length": null,
                    "width": null,
                    "description": null,
                    "features3": null,
                    "features2": null
                },
                "11": {
                    "features": null,
                    "level": null,
                    "length": null,
                    "width": null,
                    "description": null,
                    "features3": null,
                    "features2": null
                },
                "12": {
                    "features": null,
                    "level": null,
                    "length": null,
                    "width": null,
                    "description": null,
                    "features3": null,
                    "features2": null
                }
            },
            "taxes": {
                "annualAmount": "17531.47",
                "assessmentYear": "2024"
            },
            "timestamps": {
                "idxUpdated": "2024-10-12T12:00:26.000Z",
                "listingUpdated": "2024-10-12T07:18:52.000Z",
                "photosUpdated": "2024-10-12T07:18:52.000Z",
                "conditionalExpiryDate": null,
                "terminatedDate": null,
                "suspendedDate": null,
                "listingEntryDate": null,
                "closedDate": null,
                "unavailableDate": null,
                "expiryDate": null,
                "extensionEntryDate": null,
                "possessionDate": "2024-10-15T00:00:00.000Z",
                "repliersUpdatedOn": "2024-10-12T14:02:54.906Z"
            },
            "agents": [],
            "commercial": {
                "amps": "",
                "areaInfluences": {
                    "1": "",
                    "2": ""
                },
                "baySize": {
                    "1": {
                        "inches": "",
                        "feet": ""
                    },
                    "2": {
                        "inches": "",
                        "feet": ""
                    }
                },
                "expenses": {
                    "operating": "",
                    "yearly": "",
                    "insurance": "",
                    "maintenance": "",
                    "management": "",
                    "water": ""
                },
                "businessType": "Marina",
                "ceilingHeightInches": "",
                "ceilingHeightFeet": "",
                "chattels": "",
                "commonAreaUpcharge": "",
                "communityCode": "09.09.0030",
                "crane": "",
                "energyCertified": "",
                "financialStatementsAvailable": "",
                "franchise": "",
                "freestanding": "Y",
                "greenPropertyInfoStatement": "",
                "grossSalesIncome": "",
                "handicapEquipped": "",
                "operatingHours": "",
                "industrialArea": "",
                "industrialAreaCode": "",
                "inventoryValuesAtCost": "",
                "llbo": "",
                "lotCode": "Lot",
                "listPriceCode": "For Sale",
                "minLeaseTermMonths": "",
                "officeArea": "",
                "officeAreaCode": "",
                "outsideStorage": "",
                "outOfAreaMunicipality": "",
                "percentageBuilding": "",
                "percentageRent": "",
                "rail": "",
                "retailArea": "",
                "retailAreaCode": "",
                "sewer": "",
                "shippingDoors": {
                    "driveIn": {
                        "heightFeet": "",
                        "heightInches": "",
                        "number": "",
                        "widthFeet": "",
                        "widthInches": ""
                    },
                    "doubleMan": {
                        "heightFeet": "",
                        "heightInches": "",
                        "number": "",
                        "widthFeet": "",
                        "widthInches": ""
                    },
                    "gradeLevel": {
                        "heightFeet": "",
                        "heightInches": "",
                        "number": "",
                        "widthFeet": "",
                        "widthInches": ""
                    },
                    "truckLevel": {
                        "heightFeet": "",
                        "heightInches": "",
                        "number": "",
                        "widthFeet": "",
                        "widthInches": ""
                    }
                },
                "soilTest": "",
                "sprinklers": "",
                "survey": "",
                "maxLeaseTermMonths": "",
                "totalAreaCode": "Acres",
                "trailerParkingSpots": "",
                "assessment": "",
                "taxType": "Annual",
                "uffi": "",
                "utilities": "Y",
                "vacancyAllowance": "",
                "sellerPropertyInfoStatement": "N",
                "volts": "",
                "water": "Municipal",
                "waterSupplyType": "",
                "zoning": "C5"
            },
            "boardId": 2
        },
        {
            "mlsNumber": "N9394040",
            "resource": "Property:2381",
            "status": "A",
            "class": "ResidentialProperty",
            "type": "Sale",
            "listPrice": "3160000.00",
            "listDate": "2024-10-12T00:00:00.000Z",
            "lastStatus": "New",
            "soldPrice": "0.00",
            "soldDate": null,
            "originalPrice": "3160000.00",
            "assignment": "",
            "address": {
                "area": "York",
                "city": "Georgina",
                "country": null,
                "district": "Georgina",
                "majorIntersection": "Queensway/Mac Ave",
                "neighborhood": "Keswick South",
                "streetDirection": "",
                "streetName": "Mac",
                "streetNumber": "12",
                "streetSuffix": "Ave",
                "unitNumber": "",
                "zip": "L4P 3W5",
                "state": "Ontario",
                "communityCode": "09.09.0030",
                "streetDirectionPrefix": null
            },
            "map": {
                "latitude": "44.2268765",
                "longitude": "-79.4655832",
                "point": "POINT (-79.4655832 44.2268765)"
            },
            "permissions": {
                "displayAddressOnInternet": "Y",
                "displayPublic": "Y",
                "displayInternetEntireListing": "Y"
            },
            "images": [
                "IMG-N9394040_1.jpg",
                "IMG-N9394040_2.jpg",
                "IMG-N9394040_3.jpg",
                "IMG-N9394040_4.jpg",
                "IMG-N9394040_5.jpg",
                "IMG-N9394040_6.jpg",
                "IMG-N9394040_7.jpg",
                "IMG-N9394040_8.jpg",
                "IMG-N9394040_9.jpg",
                "IMG-N9394040_10.jpg",
                "IMG-N9394040_11.jpg",
                "IMG-N9394040_12.jpg",
                "IMG-N9394040_13.jpg",
                "IMG-N9394040_14.jpg",
                "IMG-N9394040_15.jpg",
                "IMG-N9394040_16.jpg",
                "IMG-N9394040_17.jpg",
                "IMG-N9394040_18.jpg",
                "IMG-N9394040_19.jpg",
                "IMG-N9394040_20.jpg",
                "IMG-N9394040_21.jpg",
                "IMG-N9394040_22.jpg",
                "IMG-N9394040_23.jpg",
                "IMG-N9394040_24.jpg",
                "IMG-N9394040_25.jpg",
                "IMG-N9394040_26.jpg",
                "IMG-N9394040_27.jpg",
                "IMG-N9394040_28.jpg",
                "IMG-N9394040_29.jpg",
                "IMG-N9394040_30.jpg",
                "IMG-N9394040_31.jpg",
                "IMG-N9394040_32.jpg",
                "IMG-N9394040_33.jpg",
                "IMG-N9394040_34.jpg",
                "IMG-N9394040_35.jpg",
                "IMG-N9394040_36.jpg",
                "IMG-N9394040_37.jpg",
                "IMG-N9394040_38.jpg"
            ],
            "photoCount": 38,
            "details": {
                "airConditioning": "None",
                "basement1": "None",
                "basement2": "",
                "centralVac": "",
                "den": "N",
                "description": "Welcome to 1.82 acre waterfront tourist commercial zoned marina properties, Area including land, water and road Total Approximately 7362 square meters. Beautiful Waterfront Property On Maskononge River Direct Access To Lake Simcoe With Docking For Large Boats. Perfect Spot For The Boating Enthusiast, Fisherman & Investor. Property Currently Offers Main Living Area With View Of River, Including 2 Covered Boat Slips, 3 Apartments with 3 Washrooms and 2 Kitchens. Airbnb and Water activities Income Year round. 20 Boat Slips With Existing boater clientele. Land area on 8 Mac Ave can be building 6 Townhouses on water. This Waterfront Commercial Land with Lots of potential.  5 mins to Walmart, Banks, Grocery stores, Shops, Restaurants, 5 mins to HWY 404",
                "elevator": "",
                "exteriorConstruction1": "Vinyl Siding",
                "exteriorConstruction2": "",
                "extras": "S/S Appliances, Fridges [2], Stove [2], Microwave [1], Range Hood [1] , Washer & Dryer [1]Set. Window Covers, exiting keys, Land development Townhouse Rendering attached",
                "furnished": "",
                "garage": "None",
                "heating": "Baseboard",
                "numBathrooms": "3",
                "numBathroomsPlus": null,
                "numBedrooms": "5",
                "numBedroomsPlus": "",
                "numFireplaces": "N",
                "numGarageSpaces": "0.0",
                "numParkingSpaces": "4.0",
                "numRooms": "4",
                "numRoomsPlus": "",
                "patio": null,
                "propertyType": "Detached",
                "sqft": "",
                "style": "Bungaloft",
                "swimmingPool": "None",
                "virtualTourUrl": "",
                "yearBuilt": "",
                "landAccessType": null,
                "landSewer": null,
                "viewType": null,
                "zoningDescription": null,
                "analyticsClick": null,
                "moreInformationLink": null,
                "alternateURLVideoLink": null,
                "flooringType": null,
                "foundationType": null,
                "landscapeFeatures": null,
                "fireProtection": null,
                "roofMaterial": null,
                "farmType": null,
                "zoningType": null,
                "businessType": null,
                "businessSubType": null,
                "landDisposition": null,
                "storageType": null,
                "constructionStyleSplitLevel": null,
                "constructionStatus": null,
                "loadingType": null,
                "ceilingType": null,
                "liveStreamEventURL": null,
                "energuideRating": null,
                "amperage": null,
                "sewer": "Sewers",
                "familyRoom": "N",
                "zoning": "Commercial, Residential",
                "driveway": "Available",
                "leaseTerms": "",
                "centralAirConditioning": "",
                "certificationLevel": "",
                "energyCertification": "",
                "parkCostMonthly": "",
                "commonElementsIncluded": "",
                "greenPropertyInformationStatement": "",
                "handicappedEquipped": "",
                "laundryLevel": "",
                "numKitchens": "2",
                "numKitchensPlus": "1",
                "sqftRange": null,
                "numDrivewaySpaces": null,
                "HOAFee": null,
                "HOAFee2": null,
                "HOAFee3": null,
                "waterSource": "Municipal",
                "livingAreaMeasurement": null,
                "waterfront": null,
                "bathrooms": {
                    "1": {
                        "level": "Main",
                        "count": "1",
                        "pieces": "3"
                    },
                    "2": {
                        "level": "",
                        "count": "1",
                        "pieces": "3"
                    },
                    "3": {
                        "level": "",
                        "count": "1",
                        "pieces": "3"
                    },
                    "4": {
                        "level": "",
                        "count": "",
                        "pieces": ""
                    },
                    "5": {
                        "level": "",
                        "count": "",
                        "pieces": ""
                    }
                },
                "numBathroomsHalf": null
            },
            "daysOnMarket": "0",
            "occupancy": "",
            "updatedOn": "2024-10-12T07:36:54.000Z",
            "condominium": {
                "ammenities": [],
                "buildingInsurance": null,
                "condoCorp": null,
                "condoCorpNum": null,
                "exposure": null,
                "lockerNumber": "",
                "locker": null,
                "parkingType": null,
                "pets": null,
                "propertyMgr": null,
                "stories": null,
                "fees": {
                    "cableInlc": "",
                    "heatIncl": "",
                    "hydroIncl": "",
                    "maintenance": null,
                    "parkingIncl": "",
                    "taxesIncl": null,
                    "waterIncl": ""
                },
                "lockerUnitNumber": null,
                "ensuiteLaundry": null,
                "sharesPercentage": null,
                "lockerLevel": null,
                "unitNumber": null
            },
            "coopCompensation": "2.5% + HST",
            "lot": {
                "acres": "",
                "depth": "1.00",
                "irregular": "1174 Square Metres",
                "legalDescription": "PT LT 9 CON 3 N GWILLIMBURY AS IN R690189,T/W RIGHT IF ANY IN R690189 TOWN OF GEORGINA",
                "measurement": "Metres",
                "width": "1174.00",
                "size": null
            },
            "nearby": {
                "ammenities": [
                    "Marina",
                    "Waterfront"
                ]
            },
            "office": {
                "brokerageName": "HOMELIFE NEW WORLD REALTY INC."
            },
            "openHouse": {
                "1": {
                    "date": "",
                    "startTime": "",
                    "endTime": "",
                    "type": null,
                    "status": null,
                    "TZ": "ET"
                },
                "2": {
                    "date": "",
                    "startTime": "",
                    "endTime": "",
                    "type": null,
                    "status": null,
                    "TZ": "ET"
                },
                "3": {
                    "date": "",
                    "startTime": "",
                    "endTime": "",
                    "type": null,
                    "status": null,
                    "TZ": "ET"
                }
            },
            "rooms": {
                "1": {
                    "features": "",
                    "level": "Ground",
                    "length": "5.75",
                    "width": "3.00",
                    "description": "Kitchen",
                    "features3": "",
                    "features2": ""
                },
                "2": {
                    "features": "",
                    "level": "Ground",
                    "length": "5.75",
                    "width": "3.81",
                    "description": "Living",
                    "features3": "",
                    "features2": ""
                },
                "3": {
                    "features": "",
                    "level": "Ground",
                    "length": "3.84",
                    "width": "3.00",
                    "description": "Prim Bdrm",
                    "features3": "",
                    "features2": ""
                },
                "4": {
                    "features": "",
                    "level": "Ground",
                    "length": "2.90",
                    "width": "2.97",
                    "description": "2nd Br",
                    "features3": "",
                    "features2": ""
                },
                "5": {
                    "features": "",
                    "level": "Ground",
                    "length": "2.90",
                    "width": "2.97",
                    "description": "3rd Br",
                    "features3": "",
                    "features2": ""
                },
                "6": {
                    "features": "",
                    "level": "2nd",
                    "length": "2.60",
                    "width": "2.50",
                    "description": "4th Br",
                    "features3": "",
                    "features2": ""
                },
                "7": {
                    "features": "",
                    "level": "2nd",
                    "length": "2.60",
                    "width": "2.75",
                    "description": "5th Br",
                    "features3": "",
                    "features2": ""
                },
                "8": {
                    "features": "",
                    "level": "2nd",
                    "length": "1.90",
                    "width": "2.20",
                    "description": "Kitchen",
                    "features3": "",
                    "features2": ""
                },
                "9": {
                    "features": "",
                    "level": "Ground",
                    "length": "2.10",
                    "width": "2.20",
                    "description": "Kitchen",
                    "features3": "",
                    "features2": ""
                },
                "10": {
                    "features": "",
                    "level": "",
                    "length": "",
                    "width": "",
                    "description": "",
                    "features3": "",
                    "features2": ""
                },
                "11": {
                    "features": "",
                    "level": "",
                    "length": "",
                    "width": "",
                    "description": "",
                    "features3": "",
                    "features2": ""
                },
                "12": {
                    "features": "",
                    "level": "",
                    "length": "",
                    "width": "",
                    "description": "",
                    "features3": "",
                    "features2": ""
                }
            },
            "taxes": {
                "annualAmount": "7488.54",
                "assessmentYear": "2024"
            },
            "timestamps": {
                "idxUpdated": null,
                "listingUpdated": "2024-10-12T07:36:54.000Z",
                "photosUpdated": "2024-10-12T02:02:44.000Z",
                "conditionalExpiryDate": null,
                "terminatedDate": null,
                "suspendedDate": null,
                "listingEntryDate": "2024-10-12T02:02:43.000Z",
                "closedDate": null,
                "unavailableDate": null,
                "expiryDate": "2025-04-30T00:00:00.000Z",
                "extensionEntryDate": null,
                "possessionDate": "2024-10-15T00:00:00.000Z",
                "repliersUpdatedOn": "2024-10-12T13:06:47.378Z"
            },
            "agents": [],
            "boardId": 2
        },
        {
            "mlsNumber": "N9386461",
            "resource": "Property:2381",
            "status": "A",
            "class": "ResidentialProperty",
            "type": "Lease",
            "listPrice": "2350.00",
            "listDate": "2024-10-07T00:00:00.000Z",
            "lastStatus": "New",
            "soldPrice": "0.00",
            "soldDate": null,
            "originalPrice": "2350.00",
            "assignment": "",
            "address": {
                "area": "York",
                "city": "Georgina",
                "country": null,
                "district": "Georgina",
                "majorIntersection": "Biscayne And The Queensway",
                "neighborhood": "Keswick South",
                "streetDirection": "",
                "streetName": "Newlands",
                "streetNumber": "15",
                "streetSuffix": "Ave",
                "unitNumber": "",
                "zip": "L4P 3T3",
                "state": "Ontario",
                "communityCode": "09.09.0030",
                "streetDirectionPrefix": null
            },
            "map": {
                "latitude": "44.2245254",
                "longitude": "-79.4631249",
                "point": "POINT (-79.4631249 44.2245254)"
            },
            "permissions": {
                "displayAddressOnInternet": "Y",
                "displayPublic": "Y",
                "displayInternetEntireListing": "Y"
            },
            "images": [
                "IMG-N9386461_1.jpg",
                "IMG-N9386461_2.jpg",
                "IMG-N9386461_3.jpg",
                "IMG-N9386461_4.jpg",
                "IMG-N9386461_5.jpg",
                "IMG-N9386461_6.jpg",
                "IMG-N9386461_7.jpg",
                "IMG-N9386461_8.jpg",
                "IMG-N9386461_9.jpg",
                "IMG-N9386461_10.jpg",
                "IMG-N9386461_11.jpg",
                "IMG-N9386461_12.jpg",
                "IMG-N9386461_13.jpg",
                "IMG-N9386461_14.jpg",
                "IMG-N9386461_15.jpg",
                "IMG-N9386461_16.jpg",
                "IMG-N9386461_17.jpg"
            ],
            "photoCount": 17,
            "details": {
                "airConditioning": "Central Air",
                "basement1": "None",
                "basement2": "",
                "centralVac": "",
                "den": "Y",
                "description": "Beautiful Detached Link House. Walk To Schools, Shopping And Transit, New Painting. Clean And Bright. Single Door Garage One Parking Spot on Driveway. Steps To Decent Elementary School And High School, Suitable For Family With Teenagers.",
                "elevator": "",
                "exteriorConstruction1": "Brick",
                "exteriorConstruction2": "",
                "extras": "",
                "furnished": "N",
                "garage": "Built-In",
                "heating": "Forced Air",
                "numBathrooms": "1",
                "numBathroomsPlus": null,
                "numBedrooms": "3",
                "numBedroomsPlus": "1",
                "numFireplaces": "N",
                "numGarageSpaces": "1.0",
                "numParkingSpaces": "3.0",
                "numRooms": "6",
                "numRoomsPlus": "",
                "patio": null,
                "propertyType": "Detached",
                "sqft": "",
                "style": "Bungalow-Raised",
                "swimmingPool": "None",
                "virtualTourUrl": "",
                "yearBuilt": "",
                "landAccessType": null,
                "landSewer": null,
                "viewType": null,
                "zoningDescription": null,
                "analyticsClick": null,
                "moreInformationLink": null,
                "alternateURLVideoLink": null,
                "flooringType": null,
                "foundationType": null,
                "landscapeFeatures": null,
                "fireProtection": null,
                "roofMaterial": null,
                "farmType": null,
                "zoningType": null,
                "businessType": null,
                "businessSubType": null,
                "landDisposition": null,
                "storageType": null,
                "constructionStyleSplitLevel": null,
                "constructionStatus": null,
                "loadingType": null,
                "ceilingType": null,
                "liveStreamEventURL": null,
                "energuideRating": null,
                "amperage": null,
                "sewer": "None",
                "familyRoom": "Y",
                "zoning": "",
                "driveway": "Private",
                "leaseTerms": "1 Year",
                "centralAirConditioning": "Y",
                "certificationLevel": "",
                "energyCertification": "N",
                "parkCostMonthly": "",
                "commonElementsIncluded": "Y",
                "greenPropertyInformationStatement": "N",
                "handicappedEquipped": "",
                "laundryLevel": "",
                "numKitchens": "1",
                "numKitchensPlus": "",
                "sqftRange": null,
                "numDrivewaySpaces": null,
                "HOAFee": null,
                "HOAFee2": null,
                "HOAFee3": null,
                "waterSource": "Other",
                "livingAreaMeasurement": null,
                "waterfront": null,
                "bathrooms": {
                    "1": {
                        "level": "Ground",
                        "count": "1",
                        "pieces": "4"
                    },
                    "2": {
                        "level": "",
                        "count": "",
                        "pieces": ""
                    },
                    "3": {
                        "level": "",
                        "count": "",
                        "pieces": ""
                    },
                    "4": {
                        "level": "",
                        "count": "",
                        "pieces": ""
                    },
                    "5": {
                        "level": "",
                        "count": "",
                        "pieces": ""
                    }
                },
                "numBathroomsHalf": null
            },
            "daysOnMarket": "0",
            "occupancy": "Immed",
            "updatedOn": "2024-10-07T20:45:12.000Z",
            "condominium": {
                "ammenities": [],
                "buildingInsurance": null,
                "condoCorp": null,
                "condoCorpNum": null,
                "exposure": null,
                "lockerNumber": "",
                "locker": null,
                "parkingType": null,
                "pets": null,
                "propertyMgr": null,
                "stories": null,
                "fees": {
                    "cableInlc": "",
                    "heatIncl": "Y",
                    "hydroIncl": "",
                    "maintenance": null,
                    "parkingIncl": "Y",
                    "taxesIncl": null,
                    "waterIncl": ""
                },
                "lockerUnitNumber": null,
                "ensuiteLaundry": null,
                "sharesPercentage": null,
                "lockerLevel": null,
                "unitNumber": null
            },
            "coopCompensation": "Half Month's Rent +Hst",
            "lot": {
                "acres": "",
                "depth": "30.02",
                "irregular": "",
                "legalDescription": "",
                "measurement": "Metres",
                "width": "8.79",
                "size": null
            },
            "nearby": {
                "ammenities": []
            },
            "office": {
                "brokerageName": "REAL ONE REALTY INC."
            },
            "openHouse": {
                "1": {
                    "date": "",
                    "startTime": "",
                    "endTime": "",
                    "type": null,
                    "status": null,
                    "TZ": "ET"
                },
                "2": {
                    "date": "",
                    "startTime": "",
                    "endTime": "",
                    "type": null,
                    "status": null,
                    "TZ": "ET"
                },
                "3": {
                    "date": "",
                    "startTime": "",
                    "endTime": "",
                    "type": null,
                    "status": null,
                    "TZ": "ET"
                }
            },
            "rooms": {
                "1": {
                    "features": "Combined W/Dining",
                    "level": "Main",
                    "length": "6.40",
                    "width": "3.28",
                    "description": "Living",
                    "features3": "",
                    "features2": ""
                },
                "2": {
                    "features": "Combined W/Living",
                    "level": "Main",
                    "length": "6.40",
                    "width": "3.28",
                    "description": "Dining",
                    "features3": "",
                    "features2": ""
                },
                "3": {
                    "features": "Laminate",
                    "level": "Main",
                    "length": "3.20",
                    "width": "3.50",
                    "description": "Family",
                    "features3": "",
                    "features2": ""
                },
                "4": {
                    "features": "Laminate",
                    "level": "Main",
                    "length": "3.53",
                    "width": "3.12",
                    "description": "Prim Bdrm",
                    "features3": "",
                    "features2": ""
                },
                "5": {
                    "features": "Laminate",
                    "level": "Main",
                    "length": "3.53",
                    "width": "2.21",
                    "description": "2nd Br",
                    "features3": "",
                    "features2": ""
                },
                "6": {
                    "features": "Laminate",
                    "level": "Main",
                    "length": "3.23",
                    "width": "2.79",
                    "description": "3rd Br",
                    "features3": "",
                    "features2": ""
                },
                "7": {
                    "features": "",
                    "level": "",
                    "length": "",
                    "width": "",
                    "description": "",
                    "features3": "",
                    "features2": ""
                },
                "8": {
                    "features": "",
                    "level": "",
                    "length": "",
                    "width": "",
                    "description": "",
                    "features3": "",
                    "features2": ""
                },
                "9": {
                    "features": "",
                    "level": "",
                    "length": "",
                    "width": "",
                    "description": "",
                    "features3": "",
                    "features2": ""
                },
                "10": {
                    "features": "",
                    "level": "",
                    "length": "",
                    "width": "",
                    "description": "",
                    "features3": "",
                    "features2": ""
                },
                "11": {
                    "features": "",
                    "level": "",
                    "length": "",
                    "width": "",
                    "description": "",
                    "features3": "",
                    "features2": ""
                },
                "12": {
                    "features": "",
                    "level": "",
                    "length": "",
                    "width": "",
                    "description": "",
                    "features3": "",
                    "features2": ""
                }
            },
            "taxes": {
                "annualAmount": "",
                "assessmentYear": ""
            },
            "timestamps": {
                "idxUpdated": null,
                "listingUpdated": "2024-10-07T20:45:12.000Z",
                "photosUpdated": "2024-10-07T20:45:11.000Z",
                "conditionalExpiryDate": null,
                "terminatedDate": null,
                "suspendedDate": null,
                "listingEntryDate": "2024-10-07T20:06:35.000Z",
                "closedDate": null,
                "unavailableDate": null,
                "expiryDate": "2025-01-31T00:00:00.000Z",
                "extensionEntryDate": null,
                "possessionDate": "2024-10-15T00:00:00.000Z",
                "repliersUpdatedOn": "2024-10-08T13:03:39.589Z"
            },
            "agents": [],
            "boardId": 2
        },
        {
            "mlsNumber": "N9379591",
            "resource": "Property:2381",
            "status": "A",
            "class": "ResidentialProperty",
            "type": "Sale",
            "listPrice": "749900.00",
            "listDate": "2024-10-03T00:00:00.000Z",
            "lastStatus": "New",
            "soldPrice": "0.00",
            "soldDate": null,
            "originalPrice": "749900.00",
            "assignment": "",
            "address": {
                "area": "York",
                "city": "Georgina",
                "country": null,
                "district": "Georgina",
                "majorIntersection": "Biscayne Blvd/Woodbine Ave",
                "neighborhood": "Keswick South",
                "streetDirection": "",
                "streetName": "Campion",
                "streetNumber": "11",
                "streetSuffix": "Crt",
                "unitNumber": "",
                "zip": "L4P 3N1",
                "state": "Ontario",
                "communityCode": "09.09.0030",
                "streetDirectionPrefix": null
            },
            "map": {
                "latitude": "44.2240688",
                "longitude": "-79.4614715",
                "point": "POINT (-79.4614715 44.2240688)"
            },
            "permissions": {
                "displayAddressOnInternet": "Y",
                "displayPublic": "Y",
                "displayInternetEntireListing": "Y"
            },
            "images": [
                "IMG-N9379591_1.jpg",
                "IMG-N9379591_2.jpg",
                "IMG-N9379591_3.jpg",
                "IMG-N9379591_4.jpg",
                "IMG-N9379591_5.jpg",
                "IMG-N9379591_6.jpg",
                "IMG-N9379591_7.jpg",
                "IMG-N9379591_8.jpg",
                "IMG-N9379591_9.jpg",
                "IMG-N9379591_10.jpg",
                "IMG-N9379591_11.jpg",
                "IMG-N9379591_12.jpg",
                "IMG-N9379591_13.jpg",
                "IMG-N9379591_14.jpg",
                "IMG-N9379591_15.jpg",
                "IMG-N9379591_16.jpg",
                "IMG-N9379591_17.jpg",
                "IMG-N9379591_18.jpg",
                "IMG-N9379591_19.jpg",
                "IMG-N9379591_20.jpg",
                "IMG-N9379591_21.jpg",
                "IMG-N9379591_22.jpg",
                "IMG-N9379591_23.jpg",
                "IMG-N9379591_24.jpg",
                "IMG-N9379591_25.jpg",
                "IMG-N9379591_26.jpg",
                "IMG-N9379591_27.jpg",
                "IMG-N9379591_28.jpg",
                "IMG-N9379591_29.jpg",
                "IMG-N9379591_30.jpg",
                "IMG-N9379591_31.jpg",
                "IMG-N9379591_32.jpg",
                "IMG-N9379591_33.jpg",
                "IMG-N9379591_34.jpg",
                "IMG-N9379591_35.jpg",
                "IMG-N9379591_36.jpg",
                "IMG-N9379591_37.jpg",
                "IMG-N9379591_38.jpg"
            ],
            "photoCount": 38,
            "details": {
                "airConditioning": "Central Air",
                "basement1": "Finished",
                "basement2": "Full",
                "centralVac": "",
                "den": "N",
                "description": "Spectacular Newly Renovated From Top To Bottom 5 Bedroom 2 Full Bath Fully Equipped Family Home Offering Quality Craftsmanship & Professional Renovations Throughout. Featuring A Remarkable Brand New Open Concept Design Chef's Kitchen With Enormous Almost 8' Peninsula Island W/Quartz Counters & Breakfast Bar. Beautiful Soft Close Slim Shaker Cabinetry, Under Counter Lighting, Undermount Sink, Sleek Stainless Steel Appliances & New Slider Provides W/O Access To Brand New Large Composite Entertainment Deck W/Privacy Screen Which Overlooks A Sun-Filled Fully Fenced Private Backyard! Offering All New Windows & Doors, Custom Stairs Case W/Wrought Iron Railings, All New Luxury Vinyl Plank Flooring Throughout,  & LED Pot Lights & All New Light Fixtures, New Exterior Siding, Both Bathrooms With Stunning & Modern Updates. Newer Furnace  & Central Air Conditioning.  Located Just Steps To Public School & High School, All Amenities, Quick Access To Commuter Routes & Nestled In To A Very Well Established Family Friendly Neighbourhood Within Walking Distance To Lake Simcoe & So Much More!! Total Finished Square Footage Including Lower Level Approximately 1600 Sq/F. Pie Shaped Lot- 54.75Ft Wide @ The Back.",
                "elevator": "",
                "exteriorConstruction1": "Brick",
                "exteriorConstruction2": "Vinyl Siding",
                "extras": "In-Law Potential W/Lower Level. All Renovations Done Professionally W/Meticulous Attention to Detail.  2 Bedrooms Upstairs & 3 Bedrooms Downstairs. Lower Level Has 3 Bedrooms Or 2 Bedrooms Plus A Rec Room! Just Move In & Enjoy!",
                "furnished": "",
                "garage": "None",
                "heating": "Forced Air",
                "numBathrooms": "2",
                "numBathroomsPlus": null,
                "numBedrooms": "3",
                "numBedroomsPlus": "2",
                "numFireplaces": "N",
                "numGarageSpaces": "0.0",
                "numParkingSpaces": "3.0",
                "numRooms": "5",
                "numRoomsPlus": "5",
                "patio": null,
                "propertyType": "Semi-Detached",
                "sqft": "",
                "style": "Bungalow-Raised",
                "swimmingPool": "None",
                "virtualTourUrl": "https://11CampionCrt.com/idx",
                "yearBuilt": "",
                "landAccessType": null,
                "landSewer": null,
                "viewType": null,
                "zoningDescription": null,
                "analyticsClick": null,
                "moreInformationLink": null,
                "alternateURLVideoLink": null,
                "flooringType": null,
                "foundationType": null,
                "landscapeFeatures": null,
                "fireProtection": null,
                "roofMaterial": null,
                "farmType": null,
                "zoningType": null,
                "businessType": null,
                "businessSubType": null,
                "landDisposition": null,
                "storageType": null,
                "constructionStyleSplitLevel": null,
                "constructionStatus": null,
                "loadingType": null,
                "ceilingType": null,
                "liveStreamEventURL": null,
                "energuideRating": null,
                "amperage": null,
                "sewer": "Sewers",
                "familyRoom": "N",
                "zoning": "",
                "driveway": "Private",
                "leaseTerms": "",
                "centralAirConditioning": "",
                "certificationLevel": "",
                "energyCertification": "",
                "parkCostMonthly": "",
                "commonElementsIncluded": "",
                "greenPropertyInformationStatement": "",
                "handicappedEquipped": "",
                "laundryLevel": "",
                "numKitchens": "1",
                "numKitchensPlus": "",
                "sqftRange": null,
                "numDrivewaySpaces": null,
                "HOAFee": null,
                "HOAFee2": null,
                "HOAFee3": null,
                "waterSource": "Municipal",
                "livingAreaMeasurement": null,
                "waterfront": null,
                "bathrooms": {
                    "1": {
                        "level": "Main",
                        "count": "1",
                        "pieces": "4"
                    },
                    "2": {
                        "level": "Lower",
                        "count": "1",
                        "pieces": "3"
                    },
                    "3": {
                        "level": "",
                        "count": "",
                        "pieces": ""
                    },
                    "4": {
                        "level": "",
                        "count": "",
                        "pieces": ""
                    },
                    "5": {
                        "level": "",
                        "count": "",
                        "pieces": ""
                    }
                },
                "numBathroomsHalf": null
            },
            "daysOnMarket": "1",
            "occupancy": "TBD",
            "updatedOn": "2024-10-04T11:07:53.000Z",
            "condominium": {
                "ammenities": [],
                "buildingInsurance": null,
                "condoCorp": null,
                "condoCorpNum": null,
                "exposure": null,
                "lockerNumber": "",
                "locker": null,
                "parkingType": null,
                "pets": null,
                "propertyMgr": null,
                "stories": null,
                "fees": {
                    "cableInlc": "",
                    "heatIncl": "",
                    "hydroIncl": "",
                    "maintenance": null,
                    "parkingIncl": "",
                    "taxesIncl": null,
                    "waterIncl": ""
                },
                "lockerUnitNumber": null,
                "ensuiteLaundry": null,
                "sharesPercentage": null,
                "lockerLevel": null,
                "unitNumber": null
            },
            "coopCompensation": "2.5% + HST",
            "lot": {
                "acres": "",
                "depth": "122.00",
                "irregular": "54.75Ft @ The Back/ Pie Shaped Lot",
                "legalDescription": "PCL 18-2 SEC 65M2688; PT LT 18 PL 65M2688, PT 3, 6",
                "measurement": "Feet",
                "width": "32.00",
                "size": null
            },
            "nearby": {
                "ammenities": [
                    "Fenced Yard",
                    "Park",
                    "Place Of Worship",
                    "Public Transit",
                    "School",
                    "School Bus Route"
                ]
            },
            "office": {
                "brokerageName": "RE/MAX ALL-STARS REALTY INC."
            },
            "openHouse": {
                "1": {
                    "date": "2024-10-12 00:00:00.0",
                    "startTime": "2:30 PM",
                    "endTime": "4:30 PM",
                    "type": null,
                    "status": null,
                    "TZ": "ET"
                },
                "2": {
                    "date": "",
                    "startTime": "",
                    "endTime": "",
                    "type": null,
                    "status": null,
                    "TZ": "ET"
                },
                "3": {
                    "date": "",
                    "startTime": "",
                    "endTime": "",
                    "type": null,
                    "status": null,
                    "TZ": "ET"
                }
            },
            "rooms": {
                "1": {
                    "features": "",
                    "level": "Main",
                    "length": "2.34",
                    "width": "1.22",
                    "description": "Foyer",
                    "features3": "",
                    "features2": ""
                },
                "2": {
                    "features": "Vinyl Floor",
                    "level": "Main",
                    "length": "5.76",
                    "width": "4.49",
                    "description": "Living",
                    "features3": "W/O To Deck",
                    "features2": "Open Concept"
                },
                "3": {
                    "features": "Vinyl Floor",
                    "level": "Main",
                    "length": "4.79",
                    "width": "3.40",
                    "description": "Kitchen",
                    "features3": "Quartz Counter",
                    "features2": "Open Stairs"
                },
                "4": {
                    "features": "Vinyl Floor",
                    "level": "Main",
                    "length": "2.97",
                    "width": "4.12",
                    "description": "Prim Bdrm",
                    "features3": "Large Closet",
                    "features2": "Large Window"
                },
                "5": {
                    "features": "Vinyl Floor",
                    "level": "Main",
                    "length": "3.37",
                    "width": "3.37",
                    "description": "2nd Br",
                    "features3": "Large Closet",
                    "features2": "Large Window"
                },
                "6": {
                    "features": "Vinyl Floor",
                    "level": "Lower",
                    "length": "3.21",
                    "width": "3.54",
                    "description": "3rd Br",
                    "features3": "",
                    "features2": "Large Window"
                },
                "7": {
                    "features": "Vinyl Floor",
                    "level": "Lower",
                    "length": "3.75",
                    "width": "4.24",
                    "description": "4th Br",
                    "features3": "",
                    "features2": "Large Window"
                },
                "8": {
                    "features": "Vinyl Floor",
                    "level": "Lower",
                    "length": "4.80",
                    "width": "3.01",
                    "description": "5th Br",
                    "features3": "O/Looks Backyard",
                    "features2": "Large Window"
                },
                "9": {
                    "features": "",
                    "level": "Lower",
                    "length": "1.71",
                    "width": "1.57",
                    "description": "Laundry",
                    "features3": "",
                    "features2": ""
                },
                "10": {
                    "features": "",
                    "level": "Lower",
                    "length": "1.91",
                    "width": "3.01",
                    "description": "Utility",
                    "features3": "",
                    "features2": ""
                },
                "11": {
                    "features": "",
                    "level": "",
                    "length": "",
                    "width": "",
                    "description": "",
                    "features3": "",
                    "features2": ""
                },
                "12": {
                    "features": "",
                    "level": "",
                    "length": "",
                    "width": "",
                    "description": "",
                    "features3": "",
                    "features2": ""
                }
            },
            "taxes": {
                "annualAmount": "3665.54",
                "assessmentYear": "2024"
            },
            "timestamps": {
                "idxUpdated": null,
                "listingUpdated": "2024-10-04T11:07:53.000Z",
                "photosUpdated": "2024-10-03T09:10:03.000Z",
                "conditionalExpiryDate": null,
                "terminatedDate": null,
                "suspendedDate": null,
                "listingEntryDate": "2024-10-03T09:09:57.000Z",
                "closedDate": null,
                "unavailableDate": null,
                "expiryDate": "2025-02-26T00:00:00.000Z",
                "extensionEntryDate": null,
                "possessionDate": null,
                "repliersUpdatedOn": "2024-10-08T07:20:21.451Z"
            },
            "agents": [],
            "boardId": 2
        },
        {
            "mlsNumber": "N9343836",
            "resource": "Property:2381",
            "status": "A",
            "class": "CondoProperty",
            "type": "Sale",
            "listPrice": "379900.00",
            "listDate": "2024-09-11T00:00:00.000Z",
            "lastStatus": "Sc",
            "soldPrice": "0.00",
            "soldDate": null,
            "originalPrice": "389000.00",
            "assignment": "",
            "address": {
                "area": "York",
                "city": "Georgina",
                "country": null,
                "district": "Georgina",
                "majorIntersection": "The Queensway & Riverglen",
                "neighborhood": "Keswick South",
                "streetDirection": "",
                "streetName": "Riverglen",
                "streetNumber": "155",
                "streetSuffix": "Dr",
                "unitNumber": "215",
                "zip": "L4P 3M3",
                "state": "Ontario",
                "communityCode": "09.09.0030",
                "streetDirectionPrefix": null
            },
            "map": {
                "latitude": "44.2257505",
                "longitude": "-79.46354869999999",
                "point": "POINT (-79.46354869999999 44.2257505)"
            },
            "permissions": {
                "displayAddressOnInternet": "Y",
                "displayPublic": "Y",
                "displayInternetEntireListing": "Y"
            },
            "images": [
                "IMG-N9343836_1.jpg",
                "IMG-N9343836_2.jpg",
                "IMG-N9343836_3.jpg",
                "IMG-N9343836_4.jpg",
                "IMG-N9343836_5.jpg",
                "IMG-N9343836_6.jpg",
                "IMG-N9343836_7.jpg",
                "IMG-N9343836_8.jpg",
                "IMG-N9343836_9.jpg",
                "IMG-N9343836_10.jpg",
                "IMG-N9343836_11.jpg",
                "IMG-N9343836_12.jpg",
                "IMG-N9343836_13.jpg",
                "IMG-N9343836_14.jpg",
                "IMG-N9343836_15.jpg",
                "IMG-N9343836_16.jpg",
                "IMG-N9343836_17.jpg",
                "IMG-N9343836_18.jpg"
            ],
            "photoCount": 18,
            "details": {
                "airConditioning": "Central Air",
                "basement1": "None",
                "basement2": "",
                "centralVac": "",
                "den": "N",
                "description": "Bright and clean 1 Bedroom Condo With Southern Exposure in a Well Maintained, secure Building conveniently located In The Centre of Town. Walk To Restaurants, Shopping, Schools & Public Transit. Close to Beautiful Lake Simcoe.  This unit comes with a large storage room inside.  Kitchen has dishwasher, fridge, stove & built-in microwave.  The Building Has An Awesome Solarium For Residents to Relax, Socialize or for Leisure Activities. Elevator & Laundry Facilities on Same Floor as this unit. Maintenance Fees Include Heat, Hydro, Water and A/C.",
                "elevator": "",
                "exteriorConstruction1": "Alum Siding",
                "exteriorConstruction2": "Brick",
                "extras": "",
                "furnished": "",
                "garage": "None",
                "heating": "Forced Air",
                "numBathrooms": "1",
                "numBathroomsPlus": null,
                "numBedrooms": "1",
                "numBedroomsPlus": "",
                "numFireplaces": "N",
                "numGarageSpaces": "0.0",
                "numParkingSpaces": "1.0",
                "numRooms": "4",
                "numRoomsPlus": "",
                "patio": "None",
                "propertyType": "Condo Apt",
                "sqft": "500-599",
                "style": "Apartment",
                "swimmingPool": null,
                "virtualTourUrl": "",
                "yearBuilt": "",
                "landAccessType": null,
                "landSewer": null,
                "viewType": null,
                "zoningDescription": null,
                "analyticsClick": null,
                "moreInformationLink": null,
                "alternateURLVideoLink": null,
                "flooringType": null,
                "foundationType": null,
                "landscapeFeatures": null,
                "fireProtection": null,
                "roofMaterial": null,
                "farmType": null,
                "zoningType": null,
                "businessType": null,
                "businessSubType": null,
                "landDisposition": null,
                "storageType": null,
                "constructionStyleSplitLevel": null,
                "constructionStatus": null,
                "loadingType": null,
                "ceilingType": null,
                "liveStreamEventURL": null,
                "energuideRating": null,
                "amperage": null,
                "sewer": null,
                "familyRoom": "N",
                "zoning": "",
                "driveway": null,
                "leaseTerms": null,
                "centralAirConditioning": "Y",
                "certificationLevel": "",
                "energyCertification": "",
                "parkCostMonthly": "",
                "commonElementsIncluded": "Y",
                "greenPropertyInformationStatement": "",
                "handicappedEquipped": "",
                "laundryLevel": "",
                "balcony": "None",
                "numKitchens": "1",
                "numKitchensPlus": "",
                "sqftRange": null,
                "numDrivewaySpaces": null,
                "HOAFee": null,
                "HOAFee2": null,
                "HOAFee3": null,
                "waterSource": null,
                "livingAreaMeasurement": null,
                "waterfront": null,
                "bathrooms": {
                    "1": {
                        "level": "",
                        "count": "1",
                        "pieces": "4"
                    },
                    "2": {
                        "level": "",
                        "count": "",
                        "pieces": ""
                    },
                    "3": {
                        "level": "",
                        "count": "",
                        "pieces": ""
                    },
                    "4": {
                        "level": "",
                        "count": "",
                        "pieces": ""
                    },
                    "5": {
                        "level": "",
                        "count": "",
                        "pieces": ""
                    }
                },
                "numBathroomsHalf": null
            },
            "daysOnMarket": "21",
            "occupancy": "30 Days/TBA",
            "updatedOn": "2024-10-02T10:35:03.000Z",
            "condominium": {
                "ammenities": [],
                "buildingInsurance": "Y",
                "condoCorp": "YRCC",
                "condoCorpNum": "763",
                "exposure": "S",
                "lockerNumber": "",
                "locker": "Ensuite",
                "parkingType": "Common",
                "pets": "Restrict",
                "propertyMgr": "Monopoly property Management",
                "stories": "2",
                "fees": {
                    "cableInlc": "",
                    "heatIncl": "Y",
                    "hydroIncl": "Y",
                    "maintenance": "496.67",
                    "parkingIncl": "Y",
                    "taxesIncl": "",
                    "waterIncl": "Y"
                },
                "lockerUnitNumber": "",
                "ensuiteLaundry": "",
                "sharesPercentage": "",
                "lockerLevel": "",
                "unitNumber": "15"
            },
            "coopCompensation": "2.5",
            "lot": {
                "acres": null,
                "depth": null,
                "irregular": null,
                "legalDescription": null,
                "measurement": null,
                "width": null,
                "size": null
            },
            "nearby": {
                "ammenities": []
            },
            "office": {
                "brokerageName": "RE/MAX ALL-STARS REALTY INC."
            },
            "openHouse": {
                "1": {
                    "date": "",
                    "startTime": "",
                    "endTime": "",
                    "type": null,
                    "status": null,
                    "TZ": "ET"
                },
                "2": {
                    "date": "",
                    "startTime": "",
                    "endTime": "",
                    "type": null,
                    "status": null,
                    "TZ": "ET"
                },
                "3": {
                    "date": "",
                    "startTime": "",
                    "endTime": "",
                    "type": null,
                    "status": null,
                    "TZ": "ET"
                }
            },
            "rooms": {
                "1": {
                    "features": "Laminate",
                    "level": "",
                    "length": "3.44",
                    "width": "3.08",
                    "description": "Living",
                    "features3": "",
                    "features2": ""
                },
                "2": {
                    "features": "Ceramic Floor",
                    "level": "",
                    "length": "3.08",
                    "width": "2.01",
                    "description": "Kitchen",
                    "features3": "",
                    "features2": ""
                },
                "3": {
                    "features": "Broadloom",
                    "level": "",
                    "length": "3.55",
                    "width": "3.08",
                    "description": "Br",
                    "features3": "",
                    "features2": "Closet"
                },
                "4": {
                    "features": "",
                    "level": "",
                    "length": "2.01",
                    "width": "1.15",
                    "description": "Other",
                    "features3": "",
                    "features2": ""
                },
                "5": {
                    "features": "",
                    "level": "",
                    "length": "",
                    "width": "",
                    "description": "",
                    "features3": "",
                    "features2": ""
                },
                "6": {
                    "features": "",
                    "level": "",
                    "length": "",
                    "width": "",
                    "description": "",
                    "features3": "",
                    "features2": ""
                },
                "7": {
                    "features": "",
                    "level": "",
                    "length": "",
                    "width": "",
                    "description": "",
                    "features3": "",
                    "features2": ""
                },
                "8": {
                    "features": "",
                    "level": "",
                    "length": "",
                    "width": "",
                    "description": "",
                    "features3": "",
                    "features2": ""
                },
                "9": {
                    "features": "",
                    "level": "",
                    "length": "",
                    "width": "",
                    "description": "",
                    "features3": "",
                    "features2": ""
                },
                "10": {
                    "features": "",
                    "level": "",
                    "length": "",
                    "width": "",
                    "description": "",
                    "features3": "",
                    "features2": ""
                },
                "11": {
                    "features": "",
                    "level": "",
                    "length": "",
                    "width": "",
                    "description": "",
                    "features3": "",
                    "features2": ""
                },
                "12": {
                    "features": "",
                    "level": "",
                    "length": "",
                    "width": "",
                    "description": "",
                    "features3": "",
                    "features2": ""
                }
            },
            "taxes": {
                "annualAmount": "1667.40",
                "assessmentYear": "2023"
            },
            "timestamps": {
                "idxUpdated": null,
                "listingUpdated": "2024-10-02T10:35:03.000Z",
                "photosUpdated": "2024-09-12T14:24:37.000Z",
                "conditionalExpiryDate": "2024-10-07T00:00:00.000Z",
                "terminatedDate": null,
                "suspendedDate": null,
                "listingEntryDate": "2024-09-11T13:54:07.000Z",
                "closedDate": null,
                "unavailableDate": null,
                "expiryDate": "2024-11-10T00:00:00.000Z",
                "extensionEntryDate": null,
                "possessionDate": null,
                "repliersUpdatedOn": "2024-10-02T15:06:11.397Z"
            },
            "agents": [],
            "boardId": 2
        },
        {
            "mlsNumber": "N9307293",
            "resource": "Property:2381",
            "status": "A",
            "class": "CommercialProperty",
            "type": "Lease",
            "listPrice": "13.50",
            "listDate": "2024-09-09T12:18:36.000Z",
            "lastStatus": "New",
            "soldPrice": null,
            "soldDate": null,
            "originalPrice": "13.50",
            "assignment": null,
            "address": {
                "area": "York",
                "city": "Georgina",
                "country": "Canada",
                "district": "Georgina",
                "majorIntersection": "Queensway & Biscayne",
                "neighborhood": "Keswick South",
                "streetDirection": "S",
                "streetName": "The Queensway",
                "streetNumber": "287",
                "streetSuffix": "",
                "unitNumber": "Unit A",
                "zip": "L4P 2B4",
                "state": "Ontario",
                "communityCode": null,
                "streetDirectionPrefix": null
            },
            "map": {
                "latitude": "44.22449049999999",
                "longitude": "-79.46429770000002",
                "point": "POINT (-79.46429770000002 44.22449049999999)"
            },
            "permissions": {
                "displayAddressOnInternet": "Y",
                "displayPublic": "Y",
                "displayInternetEntireListing": "Y"
            },
            "images": [
                "IMG-N9307293_1.jpg",
                "IMG-N9307293_2.jpg",
                "IMG-N9307293_3.jpg",
                "IMG-N9307293_4.jpg"
            ],
            "photoCount": 4,
            "details": {
                "airConditioning": "Part",
                "basement1": "N",
                "basement2": null,
                "centralVac": null,
                "den": null,
                "description": "PRIME COMMERCIAL RETAIL WITH GREAT EXPOSURE ON MAJOR THOROUGHFARE RIGHT ACROSS FROM THE BUSY MARINA. RADPIDLY GROWING TOWN WITH CLOSE PROXIMITY TO HWY 404. AMPLE PARKING. CAN BE COMBINED WITH UNIT B FOR 3500SF.",
                "elevator": "None",
                "exteriorConstruction1": null,
                "exteriorConstruction2": null,
                "extras": "TENANT IS RESPONSIBLE FOR OWN GARBAGE DISPOSAL AND SNOW REMOVAL OUTSIDE",
                "furnished": null,
                "garage": "Outside/Surface",
                "heating": "Gas Forced Air Open",
                "numBathrooms": "1",
                "numBathroomsPlus": null,
                "numBedrooms": null,
                "numBedroomsPlus": null,
                "numFireplaces": null,
                "numGarageSpaces": null,
                "numParkingSpaces": "",
                "numRooms": null,
                "numRoomsPlus": null,
                "patio": null,
                "propertyType": "Commercial/Retail",
                "sqft": null,
                "style": "Retail",
                "swimmingPool": null,
                "virtualTourUrl": "",
                "yearBuilt": "",
                "landAccessType": null,
                "landSewer": null,
                "viewType": null,
                "zoningDescription": null,
                "analyticsClick": null,
                "moreInformationLink": null,
                "alternateURLVideoLink": null,
                "flooringType": null,
                "foundationType": null,
                "landscapeFeatures": null,
                "fireProtection": null,
                "roofMaterial": null,
                "farmType": null,
                "zoningType": null,
                "businessType": null,
                "businessSubType": null,
                "landDisposition": null,
                "storageType": null,
                "constructionStyleSplitLevel": null,
                "constructionStatus": null,
                "loadingType": null,
                "ceilingType": null,
                "liveStreamEventURL": null,
                "energuideRating": null,
                "amperage": null,
                "sewer": "Sanitary",
                "familyRoom": null,
                "zoning": "General Commercial (C1)",
                "driveway": null,
                "leaseTerms": null,
                "centralAirConditioning": null,
                "certificationLevel": "",
                "energyCertification": "",
                "parkCostMonthly": null,
                "commonElementsIncluded": null,
                "greenPropertyInformationStatement": "",
                "handicappedEquipped": "",
                "laundryLevel": null,
                "numKitchens": null,
                "numKitchensPlus": null,
                "sqftRange": null,
                "numDrivewaySpaces": null,
                "HOAFee": null,
                "HOAFee2": null,
                "HOAFee3": null,
                "waterSource": "Municipal",
                "livingAreaMeasurement": null,
                "waterfront": null,
                "bathrooms": {
                    "1": {
                        "level": null,
                        "count": null,
                        "pieces": null
                    },
                    "2": {
                        "level": null,
                        "count": null,
                        "pieces": null
                    },
                    "3": {
                        "level": null,
                        "count": null,
                        "pieces": null
                    },
                    "4": {
                        "level": null,
                        "count": null,
                        "pieces": null
                    },
                    "5": {
                        "level": null,
                        "count": null,
                        "pieces": null
                    }
                },
                "numBathroomsHalf": null
            },
            "daysOnMarket": "11",
            "occupancy": "",
            "updatedOn": "2024-09-20T12:18:36.000Z",
            "condominium": {
                "ammenities": [],
                "buildingInsurance": null,
                "condoCorp": null,
                "condoCorpNum": null,
                "exposure": null,
                "lockerNumber": "",
                "locker": null,
                "parkingType": null,
                "pets": null,
                "propertyMgr": null,
                "stories": null,
                "fees": {
                    "cableInlc": null,
                    "heatIncl": "",
                    "hydroIncl": "",
                    "maintenance": "",
                    "parkingIncl": null,
                    "taxesIncl": null,
                    "waterIncl": null
                },
                "lockerUnitNumber": null,
                "ensuiteLaundry": null,
                "sharesPercentage": null,
                "lockerLevel": null,
                "unitNumber": null
            },
            "coopCompensation": null,
            "lot": {
                "acres": null,
                "depth": "200.00",
                "irregular": "",
                "legalDescription": "",
                "measurement": "Feet",
                "width": "60.00",
                "size": null
            },
            "nearby": {
                "ammenities": []
            },
            "office": {
                "brokerageName": "LIVING REALTY INC."
            },
            "openHouse": {
                "1": {
                    "date": "",
                    "startTime": "",
                    "endTime": "",
                    "type": null,
                    "status": null,
                    "TZ": "ET"
                },
                "2": {
                    "date": "",
                    "startTime": "",
                    "endTime": "",
                    "type": null,
                    "status": null,
                    "TZ": "ET"
                },
                "3": {
                    "date": "",
                    "startTime": "",
                    "endTime": "",
                    "type": null,
                    "status": null,
                    "TZ": "ET"
                }
            },
            "rooms": {
                "1": {
                    "features": null,
                    "level": null,
                    "length": null,
                    "width": null,
                    "description": null,
                    "features3": null,
                    "features2": null
                },
                "2": {
                    "features": null,
                    "level": null,
                    "length": null,
                    "width": null,
                    "description": null,
                    "features3": null,
                    "features2": null
                },
                "3": {
                    "features": null,
                    "level": null,
                    "length": null,
                    "width": null,
                    "description": null,
                    "features3": null,
                    "features2": null
                },
                "4": {
                    "features": null,
                    "level": null,
                    "length": null,
                    "width": null,
                    "description": null,
                    "features3": null,
                    "features2": null
                },
                "5": {
                    "features": null,
                    "level": null,
                    "length": null,
                    "width": null,
                    "description": null,
                    "features3": null,
                    "features2": null
                },
                "6": {
                    "features": null,
                    "level": null,
                    "length": null,
                    "width": null,
                    "description": null,
                    "features3": null,
                    "features2": null
                },
                "7": {
                    "features": null,
                    "level": null,
                    "length": null,
                    "width": null,
                    "description": null,
                    "features3": null,
                    "features2": null
                },
                "8": {
                    "features": null,
                    "level": null,
                    "length": null,
                    "width": null,
                    "description": null,
                    "features3": null,
                    "features2": null
                },
                "9": {
                    "features": null,
                    "level": null,
                    "length": null,
                    "width": null,
                    "description": null,
                    "features3": null,
                    "features2": null
                },
                "10": {
                    "features": null,
                    "level": null,
                    "length": null,
                    "width": null,
                    "description": null,
                    "features3": null,
                    "features2": null
                },
                "11": {
                    "features": null,
                    "level": null,
                    "length": null,
                    "width": null,
                    "description": null,
                    "features3": null,
                    "features2": null
                },
                "12": {
                    "features": null,
                    "level": null,
                    "length": null,
                    "width": null,
                    "description": null,
                    "features3": null,
                    "features2": null
                }
            },
            "taxes": {
                "annualAmount": "5958.77",
                "assessmentYear": "2024"
            },
            "timestamps": {
                "idxUpdated": "2024-09-20T17:00:25.000Z",
                "listingUpdated": "2024-09-20T12:18:36.000Z",
                "photosUpdated": "2024-09-09T10:39:06.000Z",
                "conditionalExpiryDate": null,
                "terminatedDate": null,
                "suspendedDate": null,
                "listingEntryDate": null,
                "closedDate": null,
                "unavailableDate": null,
                "expiryDate": null,
                "extensionEntryDate": null,
                "possessionDate": "2025-01-01T00:00:00.000Z",
                "repliersUpdatedOn": "2024-10-08T13:23:50.502Z"
            },
            "agents": [],
            "commercial": {
                "amps": "",
                "areaInfluences": {
                    "1": "",
                    "2": ""
                },
                "baySize": {
                    "1": {
                        "inches": "",
                        "feet": ""
                    },
                    "2": {
                        "inches": "",
                        "feet": ""
                    }
                },
                "expenses": {
                    "operating": "",
                    "yearly": "",
                    "insurance": "",
                    "maintenance": "",
                    "management": "",
                    "water": ""
                },
                "businessType": "Retail Store Related",
                "ceilingHeightInches": "",
                "ceilingHeightFeet": "14",
                "chattels": "N",
                "commonAreaUpcharge": "",
                "communityCode": "09.09.0030",
                "crane": "",
                "energyCertified": "",
                "financialStatementsAvailable": "N",
                "franchise": "N",
                "freestanding": "N",
                "greenPropertyInfoStatement": "",
                "grossSalesIncome": "",
                "handicapEquipped": "",
                "operatingHours": "",
                "industrialArea": "",
                "industrialAreaCode": "",
                "inventoryValuesAtCost": "",
                "llbo": "",
                "lotCode": "Lot",
                "listPriceCode": "Sq Ft Net",
                "minLeaseTermMonths": "12",
                "officeArea": "0",
                "officeAreaCode": "Sq Ft",
                "outsideStorage": "",
                "outOfAreaMunicipality": "",
                "percentageBuilding": "",
                "percentageRent": "",
                "rail": "N",
                "retailArea": "1800",
                "retailAreaCode": "Sq Ft",
                "sewer": "Sanitary",
                "shippingDoors": {
                    "driveIn": {
                        "heightFeet": "",
                        "heightInches": "",
                        "number": "",
                        "widthFeet": "",
                        "widthInches": ""
                    },
                    "doubleMan": {
                        "heightFeet": "",
                        "heightInches": "",
                        "number": "",
                        "widthFeet": "",
                        "widthInches": ""
                    },
                    "gradeLevel": {
                        "heightFeet": "",
                        "heightInches": "",
                        "number": "",
                        "widthFeet": "",
                        "widthInches": ""
                    },
                    "truckLevel": {
                        "heightFeet": "",
                        "heightInches": "",
                        "number": "",
                        "widthFeet": "",
                        "widthInches": ""
                    }
                },
                "soilTest": "",
                "sprinklers": "N",
                "survey": "",
                "maxLeaseTermMonths": "36",
                "totalAreaCode": "Sq Ft",
                "trailerParkingSpots": "",
                "assessment": "",
                "taxType": "T.M.I.",
                "uffi": "",
                "utilities": "A",
                "vacancyAllowance": "",
                "sellerPropertyInfoStatement": "N",
                "volts": "",
                "water": "Municipal",
                "waterSupplyType": "",
                "zoning": "General Commercial (C1)"
            },
            "boardId": 2
        },
        {
            "mlsNumber": "N9307331",
            "resource": "Property:2381",
            "status": "A",
            "class": "CommercialProperty",
            "type": "Lease",
            "listPrice": "13.50",
            "listDate": "2024-09-09T12:18:13.000Z",
            "lastStatus": "New",
            "soldPrice": null,
            "soldDate": null,
            "originalPrice": "13.50",
            "assignment": null,
            "address": {
                "area": "York",
                "city": "Georgina",
                "country": "Canada",
                "district": "Georgina",
                "majorIntersection": "Queensway & Biscayne",
                "neighborhood": "Keswick South",
                "streetDirection": "S",
                "streetName": "The Queensway",
                "streetNumber": "287",
                "streetSuffix": "",
                "unitNumber": "Unit B",
                "zip": "L4P 2B4",
                "state": "Ontario",
                "communityCode": null,
                "streetDirectionPrefix": null
            },
            "map": {
                "latitude": "44.22449049999999",
                "longitude": "-79.46429770000002",
                "point": "POINT (-79.46429770000002 44.22449049999999)"
            },
            "permissions": {
                "displayAddressOnInternet": "Y",
                "displayPublic": "Y",
                "displayInternetEntireListing": "Y"
            },
            "images": [
                "IMG-N9307331_1.jpg",
                "IMG-N9307331_2.jpg",
                "IMG-N9307331_3.jpg",
                "IMG-N9307331_4.jpg"
            ],
            "photoCount": 4,
            "details": {
                "airConditioning": "N",
                "basement1": "N",
                "basement2": null,
                "centralVac": null,
                "den": null,
                "description": "PRIME COMMERCIAL RETAIL WITH GREAT EXPOSURE ON MAJOR THOROUGHFARE RIGHT ACROSS FROM THE BUSY MARINA. RADPIDLY GROWING TOWN WITH CLOSE PROXIMITY TO HWY 404. AMPLE PARKING. CAN BE COMBINED WITH UNIT A FOR 3500SF.",
                "elevator": "None",
                "exteriorConstruction1": null,
                "exteriorConstruction2": null,
                "extras": "TENANT IS RESPONSIBLE FOR GARBAGE DISPOSAL AND SNOW REMOVAL OUTSIDE",
                "furnished": null,
                "garage": "Outside/Surface",
                "heating": "Gas Forced Air Open",
                "numBathrooms": "1",
                "numBathroomsPlus": null,
                "numBedrooms": null,
                "numBedroomsPlus": null,
                "numFireplaces": null,
                "numGarageSpaces": null,
                "numParkingSpaces": "",
                "numRooms": null,
                "numRoomsPlus": null,
                "patio": null,
                "propertyType": "Commercial/Retail",
                "sqft": null,
                "style": "Retail",
                "swimmingPool": null,
                "virtualTourUrl": "",
                "yearBuilt": "",
                "landAccessType": null,
                "landSewer": null,
                "viewType": null,
                "zoningDescription": null,
                "analyticsClick": null,
                "moreInformationLink": null,
                "alternateURLVideoLink": null,
                "flooringType": null,
                "foundationType": null,
                "landscapeFeatures": null,
                "fireProtection": null,
                "roofMaterial": null,
                "farmType": null,
                "zoningType": null,
                "businessType": null,
                "businessSubType": null,
                "landDisposition": null,
                "storageType": null,
                "constructionStyleSplitLevel": null,
                "constructionStatus": null,
                "loadingType": null,
                "ceilingType": null,
                "liveStreamEventURL": null,
                "energuideRating": null,
                "amperage": null,
                "sewer": "Sanitary",
                "familyRoom": null,
                "zoning": "General Commercial (C1)",
                "driveway": null,
                "leaseTerms": null,
                "centralAirConditioning": null,
                "certificationLevel": "",
                "energyCertification": "",
                "parkCostMonthly": null,
                "commonElementsIncluded": null,
                "greenPropertyInformationStatement": "",
                "handicappedEquipped": "",
                "laundryLevel": null,
                "numKitchens": null,
                "numKitchensPlus": null,
                "sqftRange": null,
                "numDrivewaySpaces": null,
                "HOAFee": null,
                "HOAFee2": null,
                "HOAFee3": null,
                "waterSource": "Municipal",
                "livingAreaMeasurement": null,
                "waterfront": null,
                "bathrooms": {
                    "1": {
                        "level": null,
                        "count": null,
                        "pieces": null
                    },
                    "2": {
                        "level": null,
                        "count": null,
                        "pieces": null
                    },
                    "3": {
                        "level": null,
                        "count": null,
                        "pieces": null
                    },
                    "4": {
                        "level": null,
                        "count": null,
                        "pieces": null
                    },
                    "5": {
                        "level": null,
                        "count": null,
                        "pieces": null
                    }
                },
                "numBathroomsHalf": null
            },
            "daysOnMarket": "11",
            "occupancy": "",
            "updatedOn": "2024-09-20T12:18:13.000Z",
            "condominium": {
                "ammenities": [],
                "buildingInsurance": null,
                "condoCorp": null,
                "condoCorpNum": null,
                "exposure": null,
                "lockerNumber": "",
                "locker": null,
                "parkingType": null,
                "pets": null,
                "propertyMgr": null,
                "stories": null,
                "fees": {
                    "cableInlc": null,
                    "heatIncl": "",
                    "hydroIncl": "",
                    "maintenance": "",
                    "parkingIncl": null,
                    "taxesIncl": null,
                    "waterIncl": null
                },
                "lockerUnitNumber": null,
                "ensuiteLaundry": null,
                "sharesPercentage": null,
                "lockerLevel": null,
                "unitNumber": null
            },
            "coopCompensation": null,
            "lot": {
                "acres": null,
                "depth": "200.00",
                "irregular": "",
                "legalDescription": "",
                "measurement": "Feet",
                "width": "60.00",
                "size": null
            },
            "nearby": {
                "ammenities": []
            },
            "office": {
                "brokerageName": "LIVING REALTY INC."
            },
            "openHouse": {
                "1": {
                    "date": "",
                    "startTime": "",
                    "endTime": "",
                    "type": null,
                    "status": null,
                    "TZ": "ET"
                },
                "2": {
                    "date": "",
                    "startTime": "",
                    "endTime": "",
                    "type": null,
                    "status": null,
                    "TZ": "ET"
                },
                "3": {
                    "date": "",
                    "startTime": "",
                    "endTime": "",
                    "type": null,
                    "status": null,
                    "TZ": "ET"
                }
            },
            "rooms": {
                "1": {
                    "features": null,
                    "level": null,
                    "length": null,
                    "width": null,
                    "description": null,
                    "features3": null,
                    "features2": null
                },
                "2": {
                    "features": null,
                    "level": null,
                    "length": null,
                    "width": null,
                    "description": null,
                    "features3": null,
                    "features2": null
                },
                "3": {
                    "features": null,
                    "level": null,
                    "length": null,
                    "width": null,
                    "description": null,
                    "features3": null,
                    "features2": null
                },
                "4": {
                    "features": null,
                    "level": null,
                    "length": null,
                    "width": null,
                    "description": null,
                    "features3": null,
                    "features2": null
                },
                "5": {
                    "features": null,
                    "level": null,
                    "length": null,
                    "width": null,
                    "description": null,
                    "features3": null,
                    "features2": null
                },
                "6": {
                    "features": null,
                    "level": null,
                    "length": null,
                    "width": null,
                    "description": null,
                    "features3": null,
                    "features2": null
                },
                "7": {
                    "features": null,
                    "level": null,
                    "length": null,
                    "width": null,
                    "description": null,
                    "features3": null,
                    "features2": null
                },
                "8": {
                    "features": null,
                    "level": null,
                    "length": null,
                    "width": null,
                    "description": null,
                    "features3": null,
                    "features2": null
                },
                "9": {
                    "features": null,
                    "level": null,
                    "length": null,
                    "width": null,
                    "description": null,
                    "features3": null,
                    "features2": null
                },
                "10": {
                    "features": null,
                    "level": null,
                    "length": null,
                    "width": null,
                    "description": null,
                    "features3": null,
                    "features2": null
                },
                "11": {
                    "features": null,
                    "level": null,
                    "length": null,
                    "width": null,
                    "description": null,
                    "features3": null,
                    "features2": null
                },
                "12": {
                    "features": null,
                    "level": null,
                    "length": null,
                    "width": null,
                    "description": null,
                    "features3": null,
                    "features2": null
                }
            },
            "taxes": {
                "annualAmount": "5627.73",
                "assessmentYear": "2024"
            },
            "timestamps": {
                "idxUpdated": "2024-09-20T17:00:25.000Z",
                "listingUpdated": "2024-09-20T12:18:13.000Z",
                "photosUpdated": "2024-09-09T10:50:10.000Z",
                "conditionalExpiryDate": null,
                "terminatedDate": null,
                "suspendedDate": null,
                "listingEntryDate": null,
                "closedDate": null,
                "unavailableDate": null,
                "expiryDate": null,
                "extensionEntryDate": null,
                "possessionDate": "2025-01-01T00:00:00.000Z",
                "repliersUpdatedOn": "2024-10-08T13:23:50.467Z"
            },
            "agents": [],
            "commercial": {
                "amps": "",
                "areaInfluences": {
                    "1": "",
                    "2": ""
                },
                "baySize": {
                    "1": {
                        "inches": "",
                        "feet": ""
                    },
                    "2": {
                        "inches": "",
                        "feet": ""
                    }
                },
                "expenses": {
                    "operating": "",
                    "yearly": "",
                    "insurance": "",
                    "maintenance": "",
                    "management": "",
                    "water": ""
                },
                "businessType": "Retail Store Related",
                "ceilingHeightInches": "",
                "ceilingHeightFeet": "14",
                "chattels": "N",
                "commonAreaUpcharge": "",
                "communityCode": "09.09.0030",
                "crane": "",
                "energyCertified": "",
                "financialStatementsAvailable": "N",
                "franchise": "N",
                "freestanding": "N",
                "greenPropertyInfoStatement": "",
                "grossSalesIncome": "",
                "handicapEquipped": "",
                "operatingHours": "",
                "industrialArea": "",
                "industrialAreaCode": "",
                "inventoryValuesAtCost": "",
                "llbo": "",
                "lotCode": "Lot",
                "listPriceCode": "Sq Ft Net",
                "minLeaseTermMonths": "12",
                "officeArea": "0",
                "officeAreaCode": "Sq Ft",
                "outsideStorage": "",
                "outOfAreaMunicipality": "",
                "percentageBuilding": "",
                "percentageRent": "",
                "rail": "N",
                "retailArea": "1700",
                "retailAreaCode": "Sq Ft",
                "sewer": "Sanitary",
                "shippingDoors": {
                    "driveIn": {
                        "heightFeet": "",
                        "heightInches": "",
                        "number": "",
                        "widthFeet": "",
                        "widthInches": ""
                    },
                    "doubleMan": {
                        "heightFeet": "",
                        "heightInches": "",
                        "number": "",
                        "widthFeet": "",
                        "widthInches": ""
                    },
                    "gradeLevel": {
                        "heightFeet": "",
                        "heightInches": "",
                        "number": "",
                        "widthFeet": "",
                        "widthInches": ""
                    },
                    "truckLevel": {
                        "heightFeet": "",
                        "heightInches": "",
                        "number": "",
                        "widthFeet": "",
                        "widthInches": ""
                    }
                },
                "soilTest": "",
                "sprinklers": "N",
                "survey": "",
                "maxLeaseTermMonths": "36",
                "totalAreaCode": "Sq Ft",
                "trailerParkingSpots": "",
                "assessment": "",
                "taxType": "T.M.I.",
                "uffi": "",
                "utilities": "A",
                "vacancyAllowance": "",
                "sellerPropertyInfoStatement": "N",
                "volts": "",
                "water": "Municipal",
                "waterSupplyType": "",
                "zoning": "General Commercial (C1)"
            },
            "boardId": 2
        },
        {
            "mlsNumber": "N9305366",
            "resource": "Property:2381",
            "status": "A",
            "class": "ResidentialProperty",
            "type": "Lease",
            "listPrice": "2800.00",
            "listDate": "2024-09-06T00:00:00.000Z",
            "lastStatus": "New",
            "soldPrice": "0.00",
            "soldDate": null,
            "originalPrice": "2800.00",
            "assignment": "",
            "address": {
                "area": "York",
                "city": "Georgina",
                "country": null,
                "district": "Georgina",
                "majorIntersection": "Biscayne/The Queensway South",
                "neighborhood": "Keswick South",
                "streetDirection": "",
                "streetName": "Biscayne",
                "streetNumber": "9A",
                "streetSuffix": "Blvd",
                "unitNumber": "3rd Flr",
                "zip": "L4P 2R4",
                "state": "Ontario",
                "communityCode": "09.09.0030",
                "streetDirectionPrefix": null
            },
            "map": {
                "latitude": "44.223118",
                "longitude": "-79.46417",
                "point": "POINT (-79.46417 44.223118)"
            },
            "permissions": {
                "displayAddressOnInternet": "Y",
                "displayPublic": "Y",
                "displayInternetEntireListing": "Y"
            },
            "images": [
                "IMG-N9305366_1.jpg",
                "IMG-N9305366_2.jpg",
                "IMG-N9305366_3.jpg",
                "IMG-N9305366_4.jpg",
                "IMG-N9305366_5.jpg",
                "IMG-N9305366_6.jpg",
                "IMG-N9305366_7.jpg"
            ],
            "photoCount": 7,
            "details": {
                "airConditioning": "Central Air",
                "basement1": "None",
                "basement2": "",
                "centralVac": "",
                "den": "Y",
                "description": "REMARKS FOR CLIENTS Experience 1,713 sq.ft. of modern living in this newly built 3-bedroom, 2-full bath unit, featuring an open-concept design with high ceilings, stylish finishes, and brand new appliances. The massive great room offers glimpses of water views through the trees, adding a touch of serenity to your everyday life. Enjoy the expanse of separate kitchen and fexible dining/living open space with balcony overlooking backyard, a huge garage + one designated driveway space, ensuite laundry room and lots of storage/closet space. Just steps from restaurants, schools, marina, Lake Simcoe, parks, and bus routes.",
                "elevator": "N",
                "exteriorConstruction1": "Alum Siding",
                "exteriorConstruction2": "",
                "extras": "Pets Upon Approval. The Tenant Pays All Utilities, NON-smoking building. Photos of mirrored almost fnished unit under construction. Unit pays 1/3 on water only all other utilities separately metered.",
                "furnished": "N",
                "garage": "Built-In",
                "heating": "Forced Air",
                "numBathrooms": "2",
                "numBathroomsPlus": null,
                "numBedrooms": "3",
                "numBedroomsPlus": "",
                "numFireplaces": "N",
                "numGarageSpaces": "1.0",
                "numParkingSpaces": "2.0",
                "numRooms": "5",
                "numRoomsPlus": "",
                "patio": null,
                "propertyType": "Triplex",
                "sqft": "",
                "style": "Apartment",
                "swimmingPool": "None",
                "virtualTourUrl": "",
                "yearBuilt": "New",
                "landAccessType": null,
                "landSewer": null,
                "viewType": null,
                "zoningDescription": null,
                "analyticsClick": null,
                "moreInformationLink": null,
                "alternateURLVideoLink": null,
                "flooringType": null,
                "foundationType": null,
                "landscapeFeatures": null,
                "fireProtection": null,
                "roofMaterial": null,
                "farmType": null,
                "zoningType": null,
                "businessType": null,
                "businessSubType": null,
                "landDisposition": null,
                "storageType": null,
                "constructionStyleSplitLevel": null,
                "constructionStatus": null,
                "loadingType": null,
                "ceilingType": null,
                "liveStreamEventURL": null,
                "energuideRating": null,
                "amperage": null,
                "sewer": "Sewers",
                "familyRoom": "Y",
                "zoning": "",
                "driveway": "Mutual",
                "leaseTerms": "2 Year",
                "centralAirConditioning": "Y",
                "certificationLevel": "",
                "energyCertification": "N",
                "parkCostMonthly": "",
                "commonElementsIncluded": "Y",
                "greenPropertyInformationStatement": "N",
                "handicappedEquipped": "",
                "laundryLevel": "Upper",
                "numKitchens": "1",
                "numKitchensPlus": "",
                "sqftRange": null,
                "numDrivewaySpaces": null,
                "HOAFee": null,
                "HOAFee2": null,
                "HOAFee3": null,
                "waterSource": "Municipal",
                "livingAreaMeasurement": null,
                "waterfront": null,
                "bathrooms": {
                    "1": {
                        "level": "3rd",
                        "count": "1",
                        "pieces": "3"
                    },
                    "2": {
                        "level": "3rd",
                        "count": "1",
                        "pieces": "3"
                    },
                    "3": {
                        "level": "",
                        "count": "",
                        "pieces": ""
                    },
                    "4": {
                        "level": "",
                        "count": "",
                        "pieces": ""
                    },
                    "5": {
                        "level": "",
                        "count": "",
                        "pieces": ""
                    }
                },
                "numBathroomsHalf": null
            },
            "daysOnMarket": "0",
            "occupancy": "Vacant",
            "updatedOn": "2024-09-06T18:03:32.000Z",
            "condominium": {
                "ammenities": [],
                "buildingInsurance": null,
                "condoCorp": null,
                "condoCorpNum": null,
                "exposure": null,
                "lockerNumber": "",
                "locker": null,
                "parkingType": null,
                "pets": null,
                "propertyMgr": null,
                "stories": null,
                "fees": {
                    "cableInlc": "",
                    "heatIncl": "",
                    "hydroIncl": "",
                    "maintenance": null,
                    "parkingIncl": "Y",
                    "taxesIncl": null,
                    "waterIncl": ""
                },
                "lockerUnitNumber": null,
                "ensuiteLaundry": null,
                "sharesPercentage": null,
                "lockerLevel": null,
                "unitNumber": null
            },
            "coopCompensation": "Half Month's Rent + HST",
            "lot": {
                "acres": "< .50",
                "depth": "200.00",
                "irregular": "",
                "legalDescription": "",
                "measurement": "Feet",
                "width": "30.00",
                "size": null
            },
            "nearby": {
                "ammenities": [
                    "Lake/Pond",
                    "Level",
                    "Marina",
                    "Public Transit",
                    "School"
                ]
            },
            "office": {
                "brokerageName": "ROYAL LEPAGE YOUR COMMUNITY REALTY"
            },
            "openHouse": {
                "1": {
                    "date": "",
                    "startTime": "",
                    "endTime": "",
                    "type": null,
                    "status": null,
                    "TZ": "ET"
                },
                "2": {
                    "date": "",
                    "startTime": "",
                    "endTime": "",
                    "type": null,
                    "status": null,
                    "TZ": "ET"
                },
                "3": {
                    "date": "",
                    "startTime": "",
                    "endTime": "",
                    "type": null,
                    "status": null,
                    "TZ": "ET"
                }
            },
            "rooms": {
                "1": {
                    "features": "",
                    "level": "3rd",
                    "length": "5.79",
                    "width": "6.86",
                    "description": "Great Rm",
                    "features3": "",
                    "features2": ""
                },
                "2": {
                    "features": "",
                    "level": "3rd",
                    "length": "5.69",
                    "width": "3.71",
                    "description": "Kitchen",
                    "features3": "",
                    "features2": ""
                },
                "3": {
                    "features": "",
                    "level": "3rd",
                    "length": "4.80",
                    "width": "3.05",
                    "description": "Prim Bdrm",
                    "features3": "",
                    "features2": ""
                },
                "4": {
                    "features": "",
                    "level": "3rd",
                    "length": "3.05",
                    "width": "3.05",
                    "description": "2nd Br",
                    "features3": "",
                    "features2": ""
                },
                "5": {
                    "features": "",
                    "level": "3rd",
                    "length": "3.05",
                    "width": "3.05",
                    "description": "3rd Br",
                    "features3": "",
                    "features2": ""
                },
                "6": {
                    "features": "",
                    "level": "3rd",
                    "length": "1.83",
                    "width": "2.44",
                    "description": "Laundry",
                    "features3": "",
                    "features2": ""
                },
                "7": {
                    "features": "",
                    "level": "",
                    "length": "",
                    "width": "",
                    "description": "",
                    "features3": "",
                    "features2": ""
                },
                "8": {
                    "features": "",
                    "level": "",
                    "length": "",
                    "width": "",
                    "description": "",
                    "features3": "",
                    "features2": ""
                },
                "9": {
                    "features": "",
                    "level": "",
                    "length": "",
                    "width": "",
                    "description": "",
                    "features3": "",
                    "features2": ""
                },
                "10": {
                    "features": "",
                    "level": "",
                    "length": "",
                    "width": "",
                    "description": "",
                    "features3": "",
                    "features2": ""
                },
                "11": {
                    "features": "",
                    "level": "",
                    "length": "",
                    "width": "",
                    "description": "",
                    "features3": "",
                    "features2": ""
                },
                "12": {
                    "features": "",
                    "level": "",
                    "length": "",
                    "width": "",
                    "description": "",
                    "features3": "",
                    "features2": ""
                }
            },
            "taxes": {
                "annualAmount": "",
                "assessmentYear": ""
            },
            "timestamps": {
                "idxUpdated": null,
                "listingUpdated": "2024-09-06T18:03:32.000Z",
                "photosUpdated": "2024-09-06T22:15:38.000Z",
                "conditionalExpiryDate": null,
                "terminatedDate": null,
                "suspendedDate": null,
                "listingEntryDate": "2024-09-06T18:03:32.000Z",
                "closedDate": null,
                "unavailableDate": null,
                "expiryDate": "2024-12-05T00:00:00.000Z",
                "extensionEntryDate": null,
                "possessionDate": "2024-10-01T00:00:00.000Z",
                "repliersUpdatedOn": "2024-09-06T23:56:54.904Z"
            },
            "agents": [],
            "boardId": 2
        },
        {
            "mlsNumber": "N9305891",
            "resource": "Property:2381",
            "status": "A",
            "class": "ResidentialProperty",
            "type": "Lease",
            "listPrice": "2575.00",
            "listDate": "2024-09-06T00:00:00.000Z",
            "lastStatus": "New",
            "soldPrice": "0.00",
            "soldDate": null,
            "originalPrice": "2575.00",
            "assignment": "",
            "address": {
                "area": "York",
                "city": "Georgina",
                "country": null,
                "district": "Georgina",
                "majorIntersection": "Biscayne / The Queensway South",
                "neighborhood": "Keswick South",
                "streetDirection": "",
                "streetName": "Biscayne",
                "streetNumber": "9",
                "streetSuffix": "Blvd",
                "unitNumber": "Main",
                "zip": "L4P 2R4",
                "state": "Ontario",
                "communityCode": "09.09.0030",
                "streetDirectionPrefix": null
            },
            "map": {
                "latitude": "44.223118",
                "longitude": "-79.46417",
                "point": "POINT (-79.46417 44.223118)"
            },
            "permissions": {
                "displayAddressOnInternet": "Y",
                "displayPublic": "Y",
                "displayInternetEntireListing": "Y"
            },
            "images": [
                "IMG-N9305891_1.jpg",
                "IMG-N9305891_2.jpg",
                "IMG-N9305891_3.jpg",
                "IMG-N9305891_4.jpg",
                "IMG-N9305891_5.jpg",
                "IMG-N9305891_6.jpg",
                "IMG-N9305891_7.jpg",
                "IMG-N9305891_8.jpg",
                "IMG-N9305891_9.jpg",
                "IMG-N9305891_10.jpg",
                "IMG-N9305891_11.jpg",
                "IMG-N9305891_12.jpg"
            ],
            "photoCount": 12,
            "details": {
                "airConditioning": "Central Air",
                "basement1": "None",
                "basement2": "",
                "centralVac": "",
                "den": "Y",
                "description": "Newly built 2-bedroom, 2-full bath main floor unit with separate entrance! Enjoy 1,079sq.ft. of open-concept living with modern finishes, ensuite laundry, parking, and a shared backyard. Juststeps from restaurants, schools, marina, Lake Simcoe, parks, and bus routes.",
                "elevator": "N",
                "exteriorConstruction1": "Alum Siding",
                "exteriorConstruction2": "",
                "extras": "Photos under construction. Pets Upon Approval. The Tenant Pays All Utilities, 1/3 water bill between 3 units, NON-smoking building.",
                "furnished": "N",
                "garage": "None",
                "heating": "Forced Air",
                "numBathrooms": "2",
                "numBathroomsPlus": null,
                "numBedrooms": "2",
                "numBedroomsPlus": "",
                "numFireplaces": "N",
                "numGarageSpaces": "0.0",
                "numParkingSpaces": "1.0",
                "numRooms": "5",
                "numRoomsPlus": "",
                "patio": null,
                "propertyType": "Triplex",
                "sqft": "",
                "style": "Apartment",
                "swimmingPool": "None",
                "virtualTourUrl": "",
                "yearBuilt": "New",
                "landAccessType": null,
                "landSewer": null,
                "viewType": null,
                "zoningDescription": null,
                "analyticsClick": null,
                "moreInformationLink": null,
                "alternateURLVideoLink": null,
                "flooringType": null,
                "foundationType": null,
                "landscapeFeatures": null,
                "fireProtection": null,
                "roofMaterial": null,
                "farmType": null,
                "zoningType": null,
                "businessType": null,
                "businessSubType": null,
                "landDisposition": null,
                "storageType": null,
                "constructionStyleSplitLevel": null,
                "constructionStatus": null,
                "loadingType": null,
                "ceilingType": null,
                "liveStreamEventURL": null,
                "energuideRating": null,
                "amperage": null,
                "sewer": "Sewers",
                "familyRoom": "Y",
                "zoning": "",
                "driveway": "Mutual",
                "leaseTerms": "2 Year",
                "centralAirConditioning": "Y",
                "certificationLevel": "",
                "energyCertification": "N",
                "parkCostMonthly": "",
                "commonElementsIncluded": "Y",
                "greenPropertyInformationStatement": "N",
                "handicappedEquipped": "",
                "laundryLevel": "Upper",
                "numKitchens": "1",
                "numKitchensPlus": "",
                "sqftRange": null,
                "numDrivewaySpaces": null,
                "HOAFee": null,
                "HOAFee2": null,
                "HOAFee3": null,
                "waterSource": "Municipal",
                "livingAreaMeasurement": null,
                "waterfront": null,
                "bathrooms": {
                    "1": {
                        "level": "Main",
                        "count": "1",
                        "pieces": "2"
                    },
                    "2": {
                        "level": "Main",
                        "count": "1",
                        "pieces": "3"
                    },
                    "3": {
                        "level": "",
                        "count": "",
                        "pieces": ""
                    },
                    "4": {
                        "level": "",
                        "count": "",
                        "pieces": ""
                    },
                    "5": {
                        "level": "",
                        "count": "",
                        "pieces": ""
                    }
                },
                "numBathroomsHalf": null
            },
            "daysOnMarket": "1",
            "occupancy": "Vacant",
            "updatedOn": "2024-09-07T10:32:24.000Z",
            "condominium": {
                "ammenities": [],
                "buildingInsurance": null,
                "condoCorp": null,
                "condoCorpNum": null,
                "exposure": null,
                "lockerNumber": "",
                "locker": null,
                "parkingType": null,
                "pets": null,
                "propertyMgr": null,
                "stories": null,
                "fees": {
                    "cableInlc": "",
                    "heatIncl": "",
                    "hydroIncl": "",
                    "maintenance": null,
                    "parkingIncl": "Y",
                    "taxesIncl": null,
                    "waterIncl": ""
                },
                "lockerUnitNumber": null,
                "ensuiteLaundry": null,
                "sharesPercentage": null,
                "lockerLevel": null,
                "unitNumber": null
            },
            "coopCompensation": "Half Months Rent + HST",
            "lot": {
                "acres": "< .50",
                "depth": "200.00",
                "irregular": "",
                "legalDescription": "",
                "measurement": "Feet",
                "width": "30.00",
                "size": null
            },
            "nearby": {
                "ammenities": [
                    "Lake/Pond",
                    "Level",
                    "Marina",
                    "Public Transit",
                    "School"
                ]
            },
            "office": {
                "brokerageName": "ROYAL LEPAGE YOUR COMMUNITY REALTY"
            },
            "openHouse": {
                "1": {
                    "date": "",
                    "startTime": "",
                    "endTime": "",
                    "type": null,
                    "status": null,
                    "TZ": "ET"
                },
                "2": {
                    "date": "",
                    "startTime": "",
                    "endTime": "",
                    "type": null,
                    "status": null,
                    "TZ": "ET"
                },
                "3": {
                    "date": "",
                    "startTime": "",
                    "endTime": "",
                    "type": null,
                    "status": null,
                    "TZ": "ET"
                }
            },
            "rooms": {
                "1": {
                    "features": "",
                    "level": "Main",
                    "length": "2.90",
                    "width": "2.62",
                    "description": "Great Rm",
                    "features3": "",
                    "features2": ""
                },
                "2": {
                    "features": "",
                    "level": "Main",
                    "length": "3.35",
                    "width": "2.62",
                    "description": "Kitchen",
                    "features3": "",
                    "features2": ""
                },
                "3": {
                    "features": "",
                    "level": "Main",
                    "length": "3.40",
                    "width": "4.47",
                    "description": "Prim Bdrm",
                    "features3": "",
                    "features2": ""
                },
                "4": {
                    "features": "",
                    "level": "Main",
                    "length": "3.35",
                    "width": "3.28",
                    "description": "2nd Br",
                    "features3": "",
                    "features2": ""
                },
                "5": {
                    "features": "",
                    "level": "Main",
                    "length": "3.84",
                    "width": "4.47",
                    "description": "Laundry",
                    "features3": "",
                    "features2": ""
                },
                "6": {
                    "features": "",
                    "level": "",
                    "length": "",
                    "width": "",
                    "description": "",
                    "features3": "",
                    "features2": ""
                },
                "7": {
                    "features": "",
                    "level": "",
                    "length": "",
                    "width": "",
                    "description": "",
                    "features3": "",
                    "features2": ""
                },
                "8": {
                    "features": "",
                    "level": "",
                    "length": "",
                    "width": "",
                    "description": "",
                    "features3": "",
                    "features2": ""
                },
                "9": {
                    "features": "",
                    "level": "",
                    "length": "",
                    "width": "",
                    "description": "",
                    "features3": "",
                    "features2": ""
                },
                "10": {
                    "features": "",
                    "level": "",
                    "length": "",
                    "width": "",
                    "description": "",
                    "features3": "",
                    "features2": ""
                },
                "11": {
                    "features": "",
                    "level": "",
                    "length": "",
                    "width": "",
                    "description": "",
                    "features3": "",
                    "features2": ""
                },
                "12": {
                    "features": "",
                    "level": "",
                    "length": "",
                    "width": "",
                    "description": "",
                    "features3": "",
                    "features2": ""
                }
            },
            "taxes": {
                "annualAmount": "",
                "assessmentYear": ""
            },
            "timestamps": {
                "idxUpdated": null,
                "listingUpdated": "2024-09-07T10:32:24.000Z",
                "photosUpdated": "2024-09-07T10:32:27.000Z",
                "conditionalExpiryDate": null,
                "terminatedDate": null,
                "suspendedDate": null,
                "listingEntryDate": "2024-09-07T10:32:24.000Z",
                "closedDate": null,
                "unavailableDate": null,
                "expiryDate": "2025-01-05T00:00:00.000Z",
                "extensionEntryDate": null,
                "possessionDate": "2024-11-01T00:00:00.000Z",
                "repliersUpdatedOn": "2024-09-08T00:00:48.693Z"
            },
            "agents": [],
            "boardId": 2
        },
        {
            "mlsNumber": "N9305298",
            "resource": "Property:2381",
            "status": "A",
            "class": "ResidentialProperty",
            "type": "Lease",
            "listPrice": "2800.00",
            "listDate": "2024-09-06T00:00:00.000Z",
            "lastStatus": "New",
            "soldPrice": "0.00",
            "soldDate": null,
            "originalPrice": "2800.00",
            "assignment": "",
            "address": {
                "area": "York",
                "city": "Georgina",
                "country": null,
                "district": "Georgina",
                "majorIntersection": "Biscayne / The Queensway South",
                "neighborhood": "Keswick South",
                "streetDirection": "",
                "streetName": "Biscayne",
                "streetNumber": "9A",
                "streetSuffix": "Blvd",
                "unitNumber": "2nd FLR",
                "zip": "L4P 2R4",
                "state": "Ontario",
                "communityCode": "09.09.0030",
                "streetDirectionPrefix": null
            },
            "map": {
                "latitude": "44.223118",
                "longitude": "-79.46417",
                "point": "POINT (-79.46417 44.223118)"
            },
            "permissions": {
                "displayAddressOnInternet": "Y",
                "displayPublic": "Y",
                "displayInternetEntireListing": "Y"
            },
            "images": [
                "IMG-N9305298_1.jpg",
                "IMG-N9305298_2.jpg",
                "IMG-N9305298_3.jpg",
                "IMG-N9305298_4.jpg",
                "IMG-N9305298_5.jpg",
                "IMG-N9305298_6.jpg",
                "IMG-N9305298_7.jpg",
                "IMG-N9305298_8.jpg",
                "IMG-N9305298_9.jpg",
                "IMG-N9305298_10.jpg",
                "IMG-N9305298_11.jpg",
                "IMG-N9305298_12.jpg",
                "IMG-N9305298_13.jpg",
                "IMG-N9305298_14.jpg",
                "IMG-N9305298_15.jpg",
                "IMG-N9305298_16.jpg",
                "IMG-N9305298_17.jpg",
                "IMG-N9305298_18.jpg"
            ],
            "photoCount": 18,
            "details": {
                "airConditioning": "Central Air",
                "basement1": "None",
                "basement2": "",
                "centralVac": "",
                "den": "Y",
                "description": "Experience modern living in this newly built 3-bedroom, 2-full bath unit offers 1,580sq.ft.designed with high ceilings, stylish finishes and new appliances. The great room is separate than the kitchen and flexible dining/living open space overlooking backyard on private balcony adding atouch of serenity to your everyday life. Enjoy the convenience of a huge garage + one driveway space, ensuite laundry room while located just steps from a variety of restaurants, parks, LakeSimcoe, schools, and bus route",
                "elevator": "N",
                "exteriorConstruction1": "Alum Siding",
                "exteriorConstruction2": "",
                "extras": "Photos of mirrored unit as currently under construction. Pets Upon Approval. The Tenant Pays All Utilities, NON-smoking building",
                "furnished": "N",
                "garage": "Built-In",
                "heating": "Forced Air",
                "numBathrooms": "2",
                "numBathroomsPlus": null,
                "numBedrooms": "3",
                "numBedroomsPlus": "",
                "numFireplaces": "N",
                "numGarageSpaces": "1.0",
                "numParkingSpaces": "2.0",
                "numRooms": "6",
                "numRoomsPlus": "",
                "patio": null,
                "propertyType": "Triplex",
                "sqft": "",
                "style": "Apartment",
                "swimmingPool": "None",
                "virtualTourUrl": "",
                "yearBuilt": "New",
                "landAccessType": null,
                "landSewer": null,
                "viewType": null,
                "zoningDescription": null,
                "analyticsClick": null,
                "moreInformationLink": null,
                "alternateURLVideoLink": null,
                "flooringType": null,
                "foundationType": null,
                "landscapeFeatures": null,
                "fireProtection": null,
                "roofMaterial": null,
                "farmType": null,
                "zoningType": null,
                "businessType": null,
                "businessSubType": null,
                "landDisposition": null,
                "storageType": null,
                "constructionStyleSplitLevel": null,
                "constructionStatus": null,
                "loadingType": null,
                "ceilingType": null,
                "liveStreamEventURL": null,
                "energuideRating": null,
                "amperage": null,
                "sewer": "Sewers",
                "familyRoom": "Y",
                "zoning": "",
                "driveway": "Mutual",
                "leaseTerms": "2 Year",
                "centralAirConditioning": "Y",
                "certificationLevel": "",
                "energyCertification": "N",
                "parkCostMonthly": "",
                "commonElementsIncluded": "Y",
                "greenPropertyInformationStatement": "N",
                "handicappedEquipped": "",
                "laundryLevel": "Upper",
                "numKitchens": "1",
                "numKitchensPlus": "",
                "sqftRange": null,
                "numDrivewaySpaces": null,
                "HOAFee": null,
                "HOAFee2": null,
                "HOAFee3": null,
                "waterSource": "Municipal",
                "livingAreaMeasurement": null,
                "waterfront": null,
                "bathrooms": {
                    "1": {
                        "level": "3rd",
                        "count": "1",
                        "pieces": "3"
                    },
                    "2": {
                        "level": "3rd",
                        "count": "1",
                        "pieces": "3"
                    },
                    "3": {
                        "level": "",
                        "count": "",
                        "pieces": ""
                    },
                    "4": {
                        "level": "",
                        "count": "",
                        "pieces": ""
                    },
                    "5": {
                        "level": "",
                        "count": "",
                        "pieces": ""
                    }
                },
                "numBathroomsHalf": null
            },
            "daysOnMarket": "0",
            "occupancy": "VACANT",
            "updatedOn": "2024-09-06T17:29:59.000Z",
            "condominium": {
                "ammenities": [],
                "buildingInsurance": null,
                "condoCorp": null,
                "condoCorpNum": null,
                "exposure": null,
                "lockerNumber": "",
                "locker": null,
                "parkingType": null,
                "pets": null,
                "propertyMgr": null,
                "stories": null,
                "fees": {
                    "cableInlc": "",
                    "heatIncl": "",
                    "hydroIncl": "",
                    "maintenance": null,
                    "parkingIncl": "Y",
                    "taxesIncl": null,
                    "waterIncl": ""
                },
                "lockerUnitNumber": null,
                "ensuiteLaundry": null,
                "sharesPercentage": null,
                "lockerLevel": null,
                "unitNumber": null
            },
            "coopCompensation": "Half Months Rent + HST",
            "lot": {
                "acres": "< .50",
                "depth": "200.00",
                "irregular": "",
                "legalDescription": "",
                "measurement": "Feet",
                "width": "30.00",
                "size": null
            },
            "nearby": {
                "ammenities": [
                    "Lake/Pond",
                    "Level",
                    "Marina",
                    "Public Transit",
                    "School"
                ]
            },
            "office": {
                "brokerageName": "ROYAL LEPAGE YOUR COMMUNITY REALTY"
            },
            "openHouse": {
                "1": {
                    "date": "",
                    "startTime": "",
                    "endTime": "",
                    "type": null,
                    "status": null,
                    "TZ": "ET"
                },
                "2": {
                    "date": "",
                    "startTime": "",
                    "endTime": "",
                    "type": null,
                    "status": null,
                    "TZ": "ET"
                },
                "3": {
                    "date": "",
                    "startTime": "",
                    "endTime": "",
                    "type": null,
                    "status": null,
                    "TZ": "ET"
                }
            },
            "rooms": {
                "1": {
                    "features": "",
                    "level": "2nd",
                    "length": "5.64",
                    "width": "5.74",
                    "description": "Great Rm",
                    "features3": "",
                    "features2": ""
                },
                "2": {
                    "features": "",
                    "level": "2nd",
                    "length": "7.24",
                    "width": "3.78",
                    "description": "Kitchen",
                    "features3": "",
                    "features2": ""
                },
                "3": {
                    "features": "",
                    "level": "2nd",
                    "length": "4.80",
                    "width": "3.25",
                    "description": "Prim Bdrm",
                    "features3": "",
                    "features2": ""
                },
                "4": {
                    "features": "",
                    "level": "2nd",
                    "length": "3.05",
                    "width": "3.25",
                    "description": "2nd Br",
                    "features3": "",
                    "features2": ""
                },
                "5": {
                    "features": "",
                    "level": "2nd",
                    "length": "3.05",
                    "width": "3.25",
                    "description": "3rd Br",
                    "features3": "",
                    "features2": ""
                },
                "6": {
                    "features": "",
                    "level": "2nd",
                    "length": "1.83",
                    "width": "2.44",
                    "description": "Laundry",
                    "features3": "",
                    "features2": ""
                },
                "7": {
                    "features": "",
                    "level": "",
                    "length": "",
                    "width": "",
                    "description": "",
                    "features3": "",
                    "features2": ""
                },
                "8": {
                    "features": "",
                    "level": "",
                    "length": "",
                    "width": "",
                    "description": "",
                    "features3": "",
                    "features2": ""
                },
                "9": {
                    "features": "",
                    "level": "",
                    "length": "",
                    "width": "",
                    "description": "",
                    "features3": "",
                    "features2": ""
                },
                "10": {
                    "features": "",
                    "level": "",
                    "length": "",
                    "width": "",
                    "description": "",
                    "features3": "",
                    "features2": ""
                },
                "11": {
                    "features": "",
                    "level": "",
                    "length": "",
                    "width": "",
                    "description": "",
                    "features3": "",
                    "features2": ""
                },
                "12": {
                    "features": "",
                    "level": "",
                    "length": "",
                    "width": "",
                    "description": "",
                    "features3": "",
                    "features2": ""
                }
            },
            "taxes": {
                "annualAmount": "",
                "assessmentYear": ""
            },
            "timestamps": {
                "idxUpdated": null,
                "listingUpdated": "2024-09-06T17:29:59.000Z",
                "photosUpdated": "2024-09-06T17:30:03.000Z",
                "conditionalExpiryDate": null,
                "terminatedDate": null,
                "suspendedDate": null,
                "listingEntryDate": "2024-09-06T17:29:59.000Z",
                "closedDate": null,
                "unavailableDate": null,
                "expiryDate": "2025-01-05T00:00:00.000Z",
                "extensionEntryDate": null,
                "possessionDate": "2024-11-01T00:00:00.000Z",
                "repliersUpdatedOn": "2024-09-06T23:55:01.718Z"
            },
            "agents": [],
            "boardId": 2
        },
        {
            "mlsNumber": "N9302715",
            "resource": "Property:2381",
            "status": "A",
            "class": "ResidentialProperty",
            "type": "Sale",
            "listPrice": "1088000.00",
            "listDate": "2024-09-05T00:00:00.000Z",
            "lastStatus": "New",
            "soldPrice": "0.00",
            "soldDate": null,
            "originalPrice": "1088000.00",
            "assignment": "",
            "address": {
                "area": "York",
                "city": "Georgina",
                "country": null,
                "district": "Georgina",
                "majorIntersection": "Woodbine Ave / The Queensway",
                "neighborhood": "Keswick South",
                "streetDirection": "",
                "streetName": "Riverglen",
                "streetNumber": "121",
                "streetSuffix": "Dr",
                "unitNumber": "",
                "zip": "L4P 2R3",
                "state": "Ontario",
                "communityCode": "09.09.0030",
                "streetDirectionPrefix": null
            },
            "map": {
                "latitude": "44.22589139999999",
                "longitude": "-79.4587651",
                "point": "POINT (-79.4587651 44.22589139999999)"
            },
            "permissions": {
                "displayAddressOnInternet": "Y",
                "displayPublic": "Y",
                "displayInternetEntireListing": "Y"
            },
            "images": [
                "IMG-N9302715_1.jpg",
                "IMG-N9302715_2.jpg",
                "IMG-N9302715_3.jpg",
                "IMG-N9302715_4.jpg",
                "IMG-N9302715_5.jpg",
                "IMG-N9302715_6.jpg",
                "IMG-N9302715_7.jpg",
                "IMG-N9302715_8.jpg",
                "IMG-N9302715_9.jpg",
                "IMG-N9302715_10.jpg",
                "IMG-N9302715_11.jpg",
                "IMG-N9302715_12.jpg",
                "IMG-N9302715_13.jpg",
                "IMG-N9302715_14.jpg",
                "IMG-N9302715_15.jpg",
                "IMG-N9302715_16.jpg",
                "IMG-N9302715_17.jpg",
                "IMG-N9302715_18.jpg",
                "IMG-N9302715_19.jpg",
                "IMG-N9302715_20.jpg",
                "IMG-N9302715_21.jpg",
                "IMG-N9302715_22.jpg",
                "IMG-N9302715_23.jpg",
                "IMG-N9302715_24.jpg",
                "IMG-N9302715_25.jpg",
                "IMG-N9302715_26.jpg",
                "IMG-N9302715_27.jpg",
                "IMG-N9302715_28.jpg",
                "IMG-N9302715_29.jpg",
                "IMG-N9302715_30.jpg",
                "IMG-N9302715_31.jpg",
                "IMG-N9302715_32.jpg",
                "IMG-N9302715_33.jpg",
                "IMG-N9302715_34.jpg",
                "IMG-N9302715_35.jpg",
                "IMG-N9302715_36.jpg",
                "IMG-N9302715_37.jpg",
                "IMG-N9302715_38.jpg",
                "IMG-N9302715_39.jpg",
                "IMG-N9302715_40.jpg"
            ],
            "photoCount": 40,
            "details": {
                "airConditioning": "Central Air",
                "basement1": "Fin W/O",
                "basement2": "W/O",
                "centralVac": "",
                "den": "Y",
                "description": "Executive 3+1 Bedroom, 3 Full Bath, 3 Level Side Split Offering A Huge Sun Filled Great Room W/Soaring Cathedral Ceilings, Hardwood Flooring & A Walk-Out To The Upper Level Deck. Features Multiple Large Windows Overlooking An Expansive Backyard Oasis Which Backs Onto Beautiful Green Space W/No Neighbours Behind.  Several Updates & Upgrades Including A Spacious Gourmet Kitchen W/Quartz Counters & Backsplash, Undermount Sink & Ss Samsung Appliances. The Primary Bedroom Retreat Overlooks The Luscious Private Backyard & Is Complete W/4 Pc Ensuite Bath & Ample Closet Space. Bright & Spacious Finished Walk-Out Basement Provides A Walk Out To The Entertainment Patio With A Fully Fenced Yard, Plus A 4th Bedroom, Recreation Room & Offers A Bright & Attractive Living Space W/Plenty Of Windows, As Well As Future In-Law Potential & Is Complete With A Separate Entrance/Built In Access To A Huge Oversized 2 Car Garage. Prime Location & Premium 60Ft X 273Ft Sprawling Property.  Large Newly Sealed Driveway W/Plenty Of Parking.  Centrally Located Within Walking Distance To All Amenities, Schools, Parks, Restaurants, Marina's, Shopping & Lake Simcoe's Beautiful Southern Shores. Quick & Convenient Commuter Access To Hwy 404 & So Much More!!",
                "elevator": "",
                "exteriorConstruction1": "Stone",
                "exteriorConstruction2": "Vinyl Siding",
                "extras": "New Broadloom On Stairs. New Quartz Counters. Newly Painted. Extra 100 Amp Panel For Future Hot Tub Potential. Newly Sealed Driveway. Pool Size Yard.",
                "furnished": "",
                "garage": "Attached",
                "heating": "Forced Air",
                "numBathrooms": "3",
                "numBathroomsPlus": null,
                "numBedrooms": "3",
                "numBedroomsPlus": "1",
                "numFireplaces": "N",
                "numGarageSpaces": "2.0",
                "numParkingSpaces": "7.0",
                "numRooms": "8",
                "numRoomsPlus": "4",
                "patio": null,
                "propertyType": "Detached",
                "sqft": "1500-2000",
                "style": "Backsplit 3",
                "swimmingPool": "None",
                "virtualTourUrl": "https://121RiverglenDr.com/idx",
                "yearBuilt": "16-30",
                "landAccessType": null,
                "landSewer": null,
                "viewType": null,
                "zoningDescription": null,
                "analyticsClick": null,
                "moreInformationLink": null,
                "alternateURLVideoLink": null,
                "flooringType": null,
                "foundationType": null,
                "landscapeFeatures": null,
                "fireProtection": null,
                "roofMaterial": null,
                "farmType": null,
                "zoningType": null,
                "businessType": null,
                "businessSubType": null,
                "landDisposition": null,
                "storageType": null,
                "constructionStyleSplitLevel": null,
                "constructionStatus": null,
                "loadingType": null,
                "ceilingType": null,
                "liveStreamEventURL": null,
                "energuideRating": null,
                "amperage": null,
                "sewer": "Sewers",
                "familyRoom": "Y",
                "zoning": "",
                "driveway": "Pvt Double",
                "leaseTerms": "",
                "centralAirConditioning": "",
                "certificationLevel": "",
                "energyCertification": "",
                "parkCostMonthly": "",
                "commonElementsIncluded": "",
                "greenPropertyInformationStatement": "",
                "handicappedEquipped": "",
                "laundryLevel": "Lower",
                "numKitchens": "1",
                "numKitchensPlus": "",
                "sqftRange": null,
                "numDrivewaySpaces": null,
                "HOAFee": null,
                "HOAFee2": null,
                "HOAFee3": null,
                "waterSource": "Municipal",
                "livingAreaMeasurement": null,
                "waterfront": null,
                "bathrooms": {
                    "1": {
                        "level": "Upper",
                        "count": "1",
                        "pieces": "4"
                    },
                    "2": {
                        "level": "Upper",
                        "count": "1",
                        "pieces": "4"
                    },
                    "3": {
                        "level": "Lower",
                        "count": "1",
                        "pieces": "3"
                    },
                    "4": {
                        "level": "",
                        "count": "",
                        "pieces": ""
                    },
                    "5": {
                        "level": "",
                        "count": "",
                        "pieces": ""
                    }
                },
                "numBathroomsHalf": null
            },
            "daysOnMarket": "3",
            "occupancy": "Flexible/TBD",
            "updatedOn": "2024-09-08T12:47:00.000Z",
            "condominium": {
                "ammenities": [],
                "buildingInsurance": null,
                "condoCorp": null,
                "condoCorpNum": null,
                "exposure": null,
                "lockerNumber": "",
                "locker": null,
                "parkingType": null,
                "pets": null,
                "propertyMgr": null,
                "stories": null,
                "fees": {
                    "cableInlc": "",
                    "heatIncl": "",
                    "hydroIncl": "",
                    "maintenance": null,
                    "parkingIncl": "",
                    "taxesIncl": null,
                    "waterIncl": ""
                },
                "lockerUnitNumber": null,
                "ensuiteLaundry": null,
                "sharesPercentage": null,
                "lockerLevel": null,
                "unitNumber": null
            },
            "coopCompensation": "2.5% + HST",
            "lot": {
                "acres": "",
                "depth": "223.00",
                "irregular": "60 X 223 X 76 X 173 FT PER GEOWAREHOUSE",
                "legalDescription": "PT LOT 8 CON 3 NORTH GWILLIMBURY PT 2, 65R29362;",
                "measurement": "Feet",
                "width": "60.00",
                "size": null
            },
            "nearby": {
                "ammenities": [
                    "Beach",
                    "Fenced Yard",
                    "Golf",
                    "Lake Access",
                    "Marina",
                    "Park"
                ]
            },
            "office": {
                "brokerageName": "RE/MAX ALL-STARS REALTY INC."
            },
            "openHouse": {
                "1": {
                    "date": "",
                    "startTime": "",
                    "endTime": "",
                    "type": null,
                    "status": null,
                    "TZ": "ET"
                },
                "2": {
                    "date": "",
                    "startTime": "",
                    "endTime": "",
                    "type": null,
                    "status": null,
                    "TZ": "ET"
                },
                "3": {
                    "date": "",
                    "startTime": "",
                    "endTime": "",
                    "type": null,
                    "status": null,
                    "TZ": "ET"
                }
            },
            "rooms": {
                "1": {
                    "features": "",
                    "level": "Main",
                    "length": "0.00",
                    "width": "0.00",
                    "description": "Foyer",
                    "features3": "",
                    "features2": ""
                },
                "2": {
                    "features": "Cathedral Ceiling",
                    "level": "Main",
                    "length": "6.65",
                    "width": "6.30",
                    "description": "Great Rm",
                    "features3": "Large Window",
                    "features2": "Hardwood Floor"
                },
                "3": {
                    "features": "Quartz Counter",
                    "level": "Main",
                    "length": "4.50",
                    "width": "3.00",
                    "description": "Kitchen",
                    "features3": "Combined W/Dining",
                    "features2": "Custom Backsplash"
                },
                "4": {
                    "features": "O/Looks Frontyard",
                    "level": "Main",
                    "length": "6.57",
                    "width": "2.35",
                    "description": "Dining",
                    "features3": "Large Window",
                    "features2": "Combined W/Great Rm"
                },
                "5": {
                    "features": "4 Pc Ensuite",
                    "level": "2nd",
                    "length": "3.74",
                    "width": "3.64",
                    "description": "Prim Bdrm",
                    "features3": "Large Closet",
                    "features2": "Large Window"
                },
                "6": {
                    "features": "Large Window",
                    "level": "2nd",
                    "length": "3.28",
                    "width": "3.96",
                    "description": "2nd Br",
                    "features3": "",
                    "features2": "Large Closet"
                },
                "7": {
                    "features": "Large Window",
                    "level": "2nd",
                    "length": "3.24",
                    "width": "3.60",
                    "description": "3rd Br",
                    "features3": "",
                    "features2": "Large Closet"
                },
                "8": {
                    "features": "Large Window",
                    "level": "Lower",
                    "length": "4.07",
                    "width": "2.93",
                    "description": "4th Br",
                    "features3": "",
                    "features2": "Large Closet"
                },
                "9": {
                    "features": "W/O To Yard",
                    "level": "Lower",
                    "length": "6.20",
                    "width": "9.12",
                    "description": "Rec",
                    "features3": "O/Looks Backyard",
                    "features2": "W/O To Garage"
                },
                "10": {
                    "features": "",
                    "level": "Lower",
                    "length": "2.28",
                    "width": "3.72",
                    "description": "Utility",
                    "features3": "",
                    "features2": ""
                },
                "11": {
                    "features": "Combined W/Kitchen",
                    "level": "Main",
                    "length": "4.50",
                    "width": "2.44",
                    "description": "Breakfast",
                    "features3": "Large Window",
                    "features2": "O/Looks Frontyard"
                },
                "12": {
                    "features": "",
                    "level": "",
                    "length": "",
                    "width": "",
                    "description": "",
                    "features3": "",
                    "features2": ""
                }
            },
            "taxes": {
                "annualAmount": "5676.00",
                "assessmentYear": "2023"
            },
            "timestamps": {
                "idxUpdated": null,
                "listingUpdated": "2024-09-08T12:47:00.000Z",
                "photosUpdated": "2024-09-06T16:41:21.000Z",
                "conditionalExpiryDate": null,
                "terminatedDate": null,
                "suspendedDate": null,
                "listingEntryDate": "2024-09-05T18:47:33.000Z",
                "closedDate": null,
                "unavailableDate": null,
                "expiryDate": "2024-12-19T00:00:00.000Z",
                "extensionEntryDate": null,
                "possessionDate": null,
                "repliersUpdatedOn": "2024-10-08T07:33:54.993Z"
            },
            "agents": [],
            "boardId": 2
        },
        {
            "mlsNumber": "N9250343",
            "resource": "Property:2381",
            "status": "A",
            "class": "CommercialProperty",
            "type": "Lease",
            "listPrice": "12.00",
            "listDate": "2024-08-12T12:19:00.000Z",
            "lastStatus": "New",
            "soldPrice": null,
            "soldDate": null,
            "originalPrice": "12.00",
            "assignment": null,
            "address": {
                "area": "York",
                "city": "Georgina",
                "country": "Canada",
                "district": "Georgina",
                "majorIntersection": "Queensway & Biscayne",
                "neighborhood": "Keswick South",
                "streetDirection": "S",
                "streetName": "The Queensway",
                "streetNumber": "287",
                "streetSuffix": "",
                "unitNumber": "Ground",
                "zip": "L4P 2B4",
                "state": "Ontario",
                "communityCode": null,
                "streetDirectionPrefix": null
            },
            "map": {
                "latitude": "44.22449049999999",
                "longitude": "-79.46429770000002",
                "point": "POINT (-79.46429770000002 44.22449049999999)"
            },
            "permissions": {
                "displayAddressOnInternet": "Y",
                "displayPublic": "Y",
                "displayInternetEntireListing": "Y"
            },
            "images": [
                "IMG-N9250343_1.jpg",
                "IMG-N9250343_2.jpg",
                "IMG-N9250343_3.jpg",
                "IMG-N9250343_4.jpg"
            ],
            "photoCount": 4,
            "details": {
                "airConditioning": "Part",
                "basement1": "N",
                "basement2": null,
                "centralVac": null,
                "den": null,
                "description": "PRIME COMMERCIAL RETAIL WITH GREAT EXPOSURE ON MAJOR THOROUGHFARE RIGHT ACROSS FROM THE BUSY MARINA. RADPIDLY GROWING TOWN WITH CLOSE PROXIMITY TO HWY 404. AMPLE PARKING. CAN BE DIVIDED INTO 2 SEPARTE UNITS: 1800 SF & 1700 SF UNDER SEPARATE LISTINGS.",
                "elevator": "None",
                "exteriorConstruction1": null,
                "exteriorConstruction2": null,
                "extras": "TENANT IS RESPONSIBLE FOR OWN GARBAGE DISPOSAL AND SNOW REMOVAL OUTSIDE",
                "furnished": null,
                "garage": "Outside/Surface",
                "heating": "Gas Forced Air Open",
                "numBathrooms": "2",
                "numBathroomsPlus": null,
                "numBedrooms": null,
                "numBedroomsPlus": null,
                "numFireplaces": null,
                "numGarageSpaces": null,
                "numParkingSpaces": "",
                "numRooms": null,
                "numRoomsPlus": null,
                "patio": null,
                "propertyType": "Commercial/Retail",
                "sqft": null,
                "style": "Retail",
                "swimmingPool": null,
                "virtualTourUrl": "",
                "yearBuilt": "",
                "landAccessType": null,
                "landSewer": null,
                "viewType": null,
                "zoningDescription": null,
                "analyticsClick": null,
                "moreInformationLink": null,
                "alternateURLVideoLink": null,
                "flooringType": null,
                "foundationType": null,
                "landscapeFeatures": null,
                "fireProtection": null,
                "roofMaterial": null,
                "farmType": null,
                "zoningType": null,
                "businessType": null,
                "businessSubType": null,
                "landDisposition": null,
                "storageType": null,
                "constructionStyleSplitLevel": null,
                "constructionStatus": null,
                "loadingType": null,
                "ceilingType": null,
                "liveStreamEventURL": null,
                "energuideRating": null,
                "amperage": null,
                "sewer": "Sanitary",
                "familyRoom": null,
                "zoning": "General Commercial (C1)",
                "driveway": null,
                "leaseTerms": null,
                "centralAirConditioning": null,
                "certificationLevel": "",
                "energyCertification": "",
                "parkCostMonthly": null,
                "commonElementsIncluded": null,
                "greenPropertyInformationStatement": "",
                "handicappedEquipped": "",
                "laundryLevel": null,
                "numKitchens": null,
                "numKitchensPlus": null,
                "sqftRange": null,
                "numDrivewaySpaces": null,
                "HOAFee": null,
                "HOAFee2": null,
                "HOAFee3": null,
                "waterSource": "Municipal",
                "livingAreaMeasurement": null,
                "waterfront": null,
                "bathrooms": {
                    "1": {
                        "level": null,
                        "count": null,
                        "pieces": null
                    },
                    "2": {
                        "level": null,
                        "count": null,
                        "pieces": null
                    },
                    "3": {
                        "level": null,
                        "count": null,
                        "pieces": null
                    },
                    "4": {
                        "level": null,
                        "count": null,
                        "pieces": null
                    },
                    "5": {
                        "level": null,
                        "count": null,
                        "pieces": null
                    }
                },
                "numBathroomsHalf": null
            },
            "daysOnMarket": "39",
            "occupancy": "",
            "updatedOn": "2024-09-20T12:19:00.000Z",
            "condominium": {
                "ammenities": [],
                "buildingInsurance": null,
                "condoCorp": null,
                "condoCorpNum": null,
                "exposure": null,
                "lockerNumber": "",
                "locker": null,
                "parkingType": null,
                "pets": null,
                "propertyMgr": null,
                "stories": null,
                "fees": {
                    "cableInlc": null,
                    "heatIncl": "",
                    "hydroIncl": "",
                    "maintenance": "",
                    "parkingIncl": null,
                    "taxesIncl": null,
                    "waterIncl": null
                },
                "lockerUnitNumber": null,
                "ensuiteLaundry": null,
                "sharesPercentage": null,
                "lockerLevel": null,
                "unitNumber": null
            },
            "coopCompensation": null,
            "lot": {
                "acres": null,
                "depth": "200.00",
                "irregular": "",
                "legalDescription": "",
                "measurement": "Feet",
                "width": "60.00",
                "size": null
            },
            "nearby": {
                "ammenities": []
            },
            "office": {
                "brokerageName": "LIVING REALTY INC."
            },
            "openHouse": {
                "1": {
                    "date": "",
                    "startTime": "",
                    "endTime": "",
                    "type": null,
                    "status": null,
                    "TZ": "ET"
                },
                "2": {
                    "date": "",
                    "startTime": "",
                    "endTime": "",
                    "type": null,
                    "status": null,
                    "TZ": "ET"
                },
                "3": {
                    "date": "",
                    "startTime": "",
                    "endTime": "",
                    "type": null,
                    "status": null,
                    "TZ": "ET"
                }
            },
            "rooms": {
                "1": {
                    "features": null,
                    "level": null,
                    "length": null,
                    "width": null,
                    "description": null,
                    "features3": null,
                    "features2": null
                },
                "2": {
                    "features": null,
                    "level": null,
                    "length": null,
                    "width": null,
                    "description": null,
                    "features3": null,
                    "features2": null
                },
                "3": {
                    "features": null,
                    "level": null,
                    "length": null,
                    "width": null,
                    "description": null,
                    "features3": null,
                    "features2": null
                },
                "4": {
                    "features": null,
                    "level": null,
                    "length": null,
                    "width": null,
                    "description": null,
                    "features3": null,
                    "features2": null
                },
                "5": {
                    "features": null,
                    "level": null,
                    "length": null,
                    "width": null,
                    "description": null,
                    "features3": null,
                    "features2": null
                },
                "6": {
                    "features": null,
                    "level": null,
                    "length": null,
                    "width": null,
                    "description": null,
                    "features3": null,
                    "features2": null
                },
                "7": {
                    "features": null,
                    "level": null,
                    "length": null,
                    "width": null,
                    "description": null,
                    "features3": null,
                    "features2": null
                },
                "8": {
                    "features": null,
                    "level": null,
                    "length": null,
                    "width": null,
                    "description": null,
                    "features3": null,
                    "features2": null
                },
                "9": {
                    "features": null,
                    "level": null,
                    "length": null,
                    "width": null,
                    "description": null,
                    "features3": null,
                    "features2": null
                },
                "10": {
                    "features": null,
                    "level": null,
                    "length": null,
                    "width": null,
                    "description": null,
                    "features3": null,
                    "features2": null
                },
                "11": {
                    "features": null,
                    "level": null,
                    "length": null,
                    "width": null,
                    "description": null,
                    "features3": null,
                    "features2": null
                },
                "12": {
                    "features": null,
                    "level": null,
                    "length": null,
                    "width": null,
                    "description": null,
                    "features3": null,
                    "features2": null
                }
            },
            "taxes": {
                "annualAmount": "11586.50",
                "assessmentYear": "2024"
            },
            "timestamps": {
                "idxUpdated": "2024-09-20T17:00:25.000Z",
                "listingUpdated": "2024-09-20T12:19:00.000Z",
                "photosUpdated": "2024-08-12T12:03:32.000Z",
                "conditionalExpiryDate": null,
                "terminatedDate": null,
                "suspendedDate": null,
                "listingEntryDate": null,
                "closedDate": null,
                "unavailableDate": null,
                "expiryDate": null,
                "extensionEntryDate": null,
                "possessionDate": "2025-01-01T00:00:00.000Z",
                "repliersUpdatedOn": "2024-10-08T13:23:50.533Z"
            },
            "agents": [],
            "commercial": {
                "amps": "",
                "areaInfluences": {
                    "1": "",
                    "2": ""
                },
                "baySize": {
                    "1": {
                        "inches": "",
                        "feet": ""
                    },
                    "2": {
                        "inches": "",
                        "feet": ""
                    }
                },
                "expenses": {
                    "operating": "",
                    "yearly": "",
                    "insurance": "",
                    "maintenance": "",
                    "management": "",
                    "water": ""
                },
                "businessType": "Retail Store Related",
                "ceilingHeightInches": "",
                "ceilingHeightFeet": "14",
                "chattels": "N",
                "commonAreaUpcharge": "",
                "communityCode": "09.09.0030",
                "crane": "",
                "energyCertified": "",
                "financialStatementsAvailable": "N",
                "franchise": "N",
                "freestanding": "N",
                "greenPropertyInfoStatement": "",
                "grossSalesIncome": "",
                "handicapEquipped": "",
                "operatingHours": "",
                "industrialArea": "",
                "industrialAreaCode": "",
                "inventoryValuesAtCost": "",
                "llbo": "",
                "lotCode": "Lot",
                "listPriceCode": "Sq Ft Net",
                "minLeaseTermMonths": "12",
                "officeArea": "",
                "officeAreaCode": "",
                "outsideStorage": "",
                "outOfAreaMunicipality": "",
                "percentageBuilding": "",
                "percentageRent": "",
                "rail": "N",
                "retailArea": "3500",
                "retailAreaCode": "Sq Ft",
                "sewer": "Sanitary",
                "shippingDoors": {
                    "driveIn": {
                        "heightFeet": "",
                        "heightInches": "",
                        "number": "",
                        "widthFeet": "",
                        "widthInches": ""
                    },
                    "doubleMan": {
                        "heightFeet": "",
                        "heightInches": "",
                        "number": "",
                        "widthFeet": "",
                        "widthInches": ""
                    },
                    "gradeLevel": {
                        "heightFeet": "",
                        "heightInches": "",
                        "number": "",
                        "widthFeet": "",
                        "widthInches": ""
                    },
                    "truckLevel": {
                        "heightFeet": "",
                        "heightInches": "",
                        "number": "",
                        "widthFeet": "",
                        "widthInches": ""
                    }
                },
                "soilTest": "",
                "sprinklers": "N",
                "survey": "",
                "maxLeaseTermMonths": "36",
                "totalAreaCode": "Sq Ft",
                "trailerParkingSpots": "",
                "assessment": "",
                "taxType": "T.M.I.",
                "uffi": "",
                "utilities": "A",
                "vacancyAllowance": "",
                "sellerPropertyInfoStatement": "N",
                "volts": "",
                "water": "Municipal",
                "waterSupplyType": "",
                "zoning": "General Commercial (C1)"
            },
            "boardId": 2
        },
        {
            "mlsNumber": "N8311276",
            "resource": "Property:2381",
            "status": "A",
            "class": "CommercialProperty",
            "type": "Lease",
            "listPrice": "20.00",
            "listDate": "2024-05-06T09:34:03.000Z",
            "lastStatus": "New",
            "soldPrice": null,
            "soldDate": null,
            "originalPrice": "20.00",
            "assignment": null,
            "address": {
                "area": "York",
                "city": "Georgina",
                "country": "Canada",
                "district": "Georgina",
                "majorIntersection": "Riverglen/Queensway",
                "neighborhood": "Keswick South",
                "streetDirection": "",
                "streetName": "Riverglen",
                "streetNumber": "155",
                "streetSuffix": "Dr",
                "unitNumber": "12",
                "zip": "L4P 3M3",
                "state": "Ontario",
                "communityCode": null,
                "streetDirectionPrefix": null
            },
            "map": {
                "latitude": "44.2257505",
                "longitude": "-79.46354869999999",
                "point": "POINT (-79.46354869999999 44.2257505)"
            },
            "permissions": {
                "displayAddressOnInternet": "Y",
                "displayPublic": "Y",
                "displayInternetEntireListing": "Y"
            },
            "images": [
                "IMG-N8311276_1.jpg",
                "IMG-N8311276_2.jpg",
                "IMG-N8311276_3.jpg",
                "IMG-N8311276_4.jpg",
                "IMG-N8311276_5.jpg",
                "IMG-N8311276_6.jpg",
                "IMG-N8311276_7.jpg",
                "IMG-N8311276_8.jpg"
            ],
            "photoCount": 8,
            "details": {
                "airConditioning": "Y",
                "basement1": "N",
                "basement2": null,
                "centralVac": null,
                "den": null,
                "description": "Centrally located busy plaza with high profile exposure & Accessibility from the Queensway and Riverglen Drive. Ground access Commercial units with two levels of residential units above. Great opportunity for office, studio or retail space. ample parking available",
                "elevator": "",
                "exteriorConstruction1": null,
                "exteriorConstruction2": null,
                "extras": "",
                "furnished": null,
                "garage": "None",
                "heating": "Elec Forced Air",
                "numBathrooms": "",
                "numBathroomsPlus": null,
                "numBedrooms": null,
                "numBedroomsPlus": null,
                "numFireplaces": null,
                "numGarageSpaces": null,
                "numParkingSpaces": "",
                "numRooms": null,
                "numRoomsPlus": null,
                "patio": null,
                "propertyType": "Commercial/Retail",
                "sqft": null,
                "style": "Multi-Use",
                "swimmingPool": null,
                "virtualTourUrl": "",
                "yearBuilt": "31-50",
                "landAccessType": null,
                "landSewer": null,
                "viewType": null,
                "zoningDescription": null,
                "analyticsClick": null,
                "moreInformationLink": null,
                "alternateURLVideoLink": null,
                "flooringType": null,
                "foundationType": null,
                "landscapeFeatures": null,
                "fireProtection": null,
                "roofMaterial": null,
                "farmType": null,
                "zoningType": null,
                "businessType": null,
                "businessSubType": null,
                "landDisposition": null,
                "storageType": null,
                "constructionStyleSplitLevel": null,
                "constructionStatus": null,
                "loadingType": null,
                "ceilingType": null,
                "liveStreamEventURL": null,
                "energuideRating": null,
                "amperage": null,
                "sewer": "",
                "familyRoom": null,
                "zoning": "Commercial",
                "driveway": null,
                "leaseTerms": null,
                "centralAirConditioning": null,
                "certificationLevel": "",
                "energyCertification": "N",
                "parkCostMonthly": null,
                "commonElementsIncluded": null,
                "greenPropertyInformationStatement": "N",
                "handicappedEquipped": "",
                "laundryLevel": null,
                "numKitchens": null,
                "numKitchensPlus": null,
                "sqftRange": null,
                "numDrivewaySpaces": null,
                "HOAFee": null,
                "HOAFee2": null,
                "HOAFee3": null,
                "waterSource": "Municipal",
                "livingAreaMeasurement": null,
                "waterfront": null,
                "bathrooms": {
                    "1": {
                        "level": null,
                        "count": null,
                        "pieces": null
                    },
                    "2": {
                        "level": null,
                        "count": null,
                        "pieces": null
                    },
                    "3": {
                        "level": null,
                        "count": null,
                        "pieces": null
                    },
                    "4": {
                        "level": null,
                        "count": null,
                        "pieces": null
                    },
                    "5": {
                        "level": null,
                        "count": null,
                        "pieces": null
                    }
                },
                "numBathroomsHalf": null
            },
            "daysOnMarket": "1",
            "occupancy": "",
            "updatedOn": "2024-05-07T09:34:03.000Z",
            "condominium": {
                "ammenities": [],
                "buildingInsurance": null,
                "condoCorp": null,
                "condoCorpNum": null,
                "exposure": null,
                "lockerNumber": "",
                "locker": null,
                "parkingType": null,
                "pets": null,
                "propertyMgr": null,
                "stories": null,
                "fees": {
                    "cableInlc": null,
                    "heatIncl": "",
                    "hydroIncl": "",
                    "maintenance": "",
                    "parkingIncl": null,
                    "taxesIncl": null,
                    "waterIncl": null
                },
                "lockerUnitNumber": null,
                "ensuiteLaundry": null,
                "sharesPercentage": null,
                "lockerLevel": null,
                "unitNumber": null
            },
            "coopCompensation": null,
            "lot": {
                "acres": null,
                "depth": "0.00",
                "irregular": "",
                "legalDescription": "",
                "measurement": "Feet",
                "width": "0.00",
                "size": null
            },
            "nearby": {
                "ammenities": []
            },
            "office": {
                "brokerageName": "RE/MAX ELITE REAL ESTATE"
            },
            "openHouse": {
                "1": {
                    "date": "",
                    "startTime": "",
                    "endTime": "",
                    "type": null,
                    "status": null,
                    "TZ": "ET"
                },
                "2": {
                    "date": "",
                    "startTime": "",
                    "endTime": "",
                    "type": null,
                    "status": null,
                    "TZ": "ET"
                },
                "3": {
                    "date": "",
                    "startTime": "",
                    "endTime": "",
                    "type": null,
                    "status": null,
                    "TZ": "ET"
                }
            },
            "rooms": {
                "1": {
                    "features": null,
                    "level": null,
                    "length": null,
                    "width": null,
                    "description": null,
                    "features3": null,
                    "features2": null
                },
                "2": {
                    "features": null,
                    "level": null,
                    "length": null,
                    "width": null,
                    "description": null,
                    "features3": null,
                    "features2": null
                },
                "3": {
                    "features": null,
                    "level": null,
                    "length": null,
                    "width": null,
                    "description": null,
                    "features3": null,
                    "features2": null
                },
                "4": {
                    "features": null,
                    "level": null,
                    "length": null,
                    "width": null,
                    "description": null,
                    "features3": null,
                    "features2": null
                },
                "5": {
                    "features": null,
                    "level": null,
                    "length": null,
                    "width": null,
                    "description": null,
                    "features3": null,
                    "features2": null
                },
                "6": {
                    "features": null,
                    "level": null,
                    "length": null,
                    "width": null,
                    "description": null,
                    "features3": null,
                    "features2": null
                },
                "7": {
                    "features": null,
                    "level": null,
                    "length": null,
                    "width": null,
                    "description": null,
                    "features3": null,
                    "features2": null
                },
                "8": {
                    "features": null,
                    "level": null,
                    "length": null,
                    "width": null,
                    "description": null,
                    "features3": null,
                    "features2": null
                },
                "9": {
                    "features": null,
                    "level": null,
                    "length": null,
                    "width": null,
                    "description": null,
                    "features3": null,
                    "features2": null
                },
                "10": {
                    "features": null,
                    "level": null,
                    "length": null,
                    "width": null,
                    "description": null,
                    "features3": null,
                    "features2": null
                },
                "11": {
                    "features": null,
                    "level": null,
                    "length": null,
                    "width": null,
                    "description": null,
                    "features3": null,
                    "features2": null
                },
                "12": {
                    "features": null,
                    "level": null,
                    "length": null,
                    "width": null,
                    "description": null,
                    "features3": null,
                    "features2": null
                }
            },
            "taxes": {
                "annualAmount": "7.55",
                "assessmentYear": "2023"
            },
            "timestamps": {
                "idxUpdated": "2024-05-07T14:00:26.000Z",
                "listingUpdated": "2024-05-07T09:34:03.000Z",
                "photosUpdated": "2024-05-07T09:34:03.000Z",
                "conditionalExpiryDate": null,
                "terminatedDate": null,
                "suspendedDate": null,
                "listingEntryDate": null,
                "closedDate": null,
                "unavailableDate": null,
                "expiryDate": null,
                "extensionEntryDate": null,
                "possessionDate": "2024-05-06T00:00:00.000Z",
                "repliersUpdatedOn": "2024-10-08T14:29:46.412Z"
            },
            "agents": [],
            "commercial": {
                "amps": "",
                "areaInfluences": {
                    "1": "Major Highway",
                    "2": "Public Transit"
                },
                "baySize": {
                    "1": {
                        "inches": "",
                        "feet": ""
                    },
                    "2": {
                        "inches": "",
                        "feet": ""
                    }
                },
                "expenses": {
                    "operating": "",
                    "yearly": "",
                    "insurance": "",
                    "maintenance": "",
                    "management": "",
                    "water": ""
                },
                "businessType": "Retail Store Related",
                "ceilingHeightInches": "",
                "ceilingHeightFeet": "",
                "chattels": "N",
                "commonAreaUpcharge": "",
                "communityCode": "09.09.0030",
                "crane": "",
                "energyCertified": "N",
                "financialStatementsAvailable": "N",
                "franchise": "N",
                "freestanding": "N",
                "greenPropertyInfoStatement": "N",
                "grossSalesIncome": "",
                "handicapEquipped": "",
                "operatingHours": "",
                "industrialArea": "",
                "industrialAreaCode": "",
                "inventoryValuesAtCost": "",
                "llbo": "",
                "lotCode": "Unit",
                "listPriceCode": "Per Sq Ft",
                "minLeaseTermMonths": "12",
                "officeArea": "",
                "officeAreaCode": "",
                "outsideStorage": "",
                "outOfAreaMunicipality": "",
                "percentageBuilding": "",
                "percentageRent": "",
                "rail": "",
                "retailArea": "1775",
                "retailAreaCode": "Sq Ft",
                "sewer": "",
                "shippingDoors": {
                    "driveIn": {
                        "heightFeet": "",
                        "heightInches": "",
                        "number": "",
                        "widthFeet": "",
                        "widthInches": ""
                    },
                    "doubleMan": {
                        "heightFeet": "",
                        "heightInches": "",
                        "number": "",
                        "widthFeet": "",
                        "widthInches": ""
                    },
                    "gradeLevel": {
                        "heightFeet": "",
                        "heightInches": "",
                        "number": "",
                        "widthFeet": "",
                        "widthInches": ""
                    },
                    "truckLevel": {
                        "heightFeet": "",
                        "heightInches": "",
                        "number": "",
                        "widthFeet": "",
                        "widthInches": ""
                    }
                },
                "soilTest": "",
                "sprinklers": "N",
                "survey": "",
                "maxLeaseTermMonths": "60",
                "totalAreaCode": "Sq Ft",
                "trailerParkingSpots": "",
                "assessment": "",
                "taxType": "T.M.I.",
                "uffi": "",
                "utilities": "Y",
                "vacancyAllowance": "",
                "sellerPropertyInfoStatement": "N",
                "volts": "",
                "water": "Municipal",
                "waterSupplyType": "",
                "zoning": "Commercial"
            },
            "boardId": 2
        },
        {
            "mlsNumber": "N8052490",
            "resource": "Property:2381",
            "status": "A",
            "class": "CommercialProperty",
            "type": "Lease",
            "listPrice": "30.00",
            "listDate": "2024-02-02T05:33:39.000Z",
            "lastStatus": "New",
            "soldPrice": null,
            "soldDate": null,
            "originalPrice": "30.00",
            "assignment": null,
            "address": {
                "area": "York",
                "city": "Georgina",
                "country": "Canada",
                "district": "Georgina",
                "majorIntersection": "The Queensway S & Riverglen Dr",
                "neighborhood": "Keswick South",
                "streetDirection": "S",
                "streetName": "The Queensway",
                "streetNumber": "253",
                "streetSuffix": "Rd",
                "unitNumber": "",
                "zip": "L4P 2B2",
                "state": "Ontario",
                "communityCode": null,
                "streetDirectionPrefix": null
            },
            "map": {
                "latitude": "44.2273314",
                "longitude": "-79.463931",
                "point": "POINT (-79.463931 44.2273314)"
            },
            "permissions": {
                "displayAddressOnInternet": "Y",
                "displayPublic": "Y",
                "displayInternetEntireListing": "Y"
            },
            "images": [
                "IMG-N8052490_1.jpg"
            ],
            "details": {
                "airConditioning": "Y",
                "basement1": "N",
                "basement2": null,
                "centralVac": null,
                "den": null,
                "description": "Don't Miss Your Opportunity To Locate Your Business In Georgina's Premier Upscale New Plaza To Be Built and Shadow Anchored Opposite the existing Boston Pizza On The Queensway South In Keswick. Site Features Include: Drive Through Opportunity Available, Plenty Of Parking For Cars And Free Boat Docking For Boat Access From Lake Simcoe! Exposure To Thousands Of Cars Daily! Surrounded By Residential And Other Retail. Units Sizes Range From 1200 Sf And Up.",
                "elevator": "None",
                "exteriorConstruction1": null,
                "exteriorConstruction2": null,
                "extras": "Proposed Occupancy Fall 2025.",
                "furnished": null,
                "garage": "Plaza",
                "heating": "Gas Forced Air Closd",
                "numBathrooms": "",
                "numBathroomsPlus": null,
                "numBedrooms": null,
                "numBedroomsPlus": null,
                "numFireplaces": null,
                "numGarageSpaces": null,
                "numParkingSpaces": "",
                "numRooms": null,
                "numRoomsPlus": null,
                "patio": null,
                "propertyType": "Commercial/Retail",
                "sqft": null,
                "style": "Retail",
                "swimmingPool": null,
                "virtualTourUrl": "",
                "yearBuilt": "New",
                "landAccessType": null,
                "landSewer": null,
                "viewType": null,
                "zoningDescription": null,
                "analyticsClick": null,
                "moreInformationLink": null,
                "alternateURLVideoLink": null,
                "flooringType": null,
                "foundationType": null,
                "landscapeFeatures": null,
                "fireProtection": null,
                "roofMaterial": null,
                "farmType": null,
                "zoningType": null,
                "businessType": null,
                "businessSubType": null,
                "landDisposition": null,
                "storageType": null,
                "constructionStyleSplitLevel": null,
                "constructionStatus": null,
                "loadingType": null,
                "ceilingType": null,
                "liveStreamEventURL": null,
                "energuideRating": null,
                "amperage": null,
                "sewer": "San+Storm",
                "familyRoom": null,
                "zoning": "Commercial/Retail",
                "driveway": null,
                "leaseTerms": null,
                "centralAirConditioning": null,
                "certificationLevel": "",
                "energyCertification": "",
                "parkCostMonthly": null,
                "commonElementsIncluded": null,
                "greenPropertyInformationStatement": "",
                "handicappedEquipped": "",
                "laundryLevel": null,
                "numKitchens": null,
                "numKitchensPlus": null,
                "sqftRange": null,
                "numDrivewaySpaces": null,
                "HOAFee": null,
                "waterSource": "Municipal",
                "livingAreaMeasurement": null,
                "bathrooms": {
                    "1": {
                        "level": null,
                        "count": null,
                        "pieces": null
                    },
                    "2": {
                        "level": null,
                        "count": null,
                        "pieces": null
                    },
                    "3": {
                        "level": null,
                        "count": null,
                        "pieces": null
                    },
                    "4": {
                        "level": null,
                        "count": null,
                        "pieces": null
                    },
                    "5": {
                        "level": null,
                        "count": null,
                        "pieces": null
                    }
                },
                "waterfront": null,
                "HOAFee2": null,
                "HOAFee3": null,
                "numBathroomsHalf": null
            },
            "daysOnMarket": "62",
            "occupancy": "Fall 2025",
            "updatedOn": "2024-04-04T05:33:39.000Z",
            "condominium": {
                "ammenities": [],
                "buildingInsurance": null,
                "condoCorp": null,
                "condoCorpNum": null,
                "exposure": null,
                "lockerNumber": "",
                "locker": null,
                "parkingType": null,
                "pets": null,
                "propertyMgr": null,
                "stories": null,
                "fees": {
                    "cableInlc": null,
                    "heatIncl": "",
                    "hydroIncl": "",
                    "maintenance": "",
                    "parkingIncl": null,
                    "taxesIncl": null,
                    "waterIncl": null
                },
                "lockerUnitNumber": null,
                "ensuiteLaundry": null,
                "sharesPercentage": null,
                "lockerLevel": null,
                "unitNumber": null
            },
            "coopCompensation": null,
            "lot": {
                "acres": null,
                "depth": "0.00",
                "irregular": "",
                "legalDescription": "",
                "measurement": "Feet",
                "width": "0.00",
                "size": null
            },
            "nearby": {
                "ammenities": []
            },
            "office": {
                "brokerageName": "RE/MAX REALTRON REALTY INC."
            },
            "openHouse": {
                "1": {
                    "date": "",
                    "startTime": "",
                    "endTime": "",
                    "type": null,
                    "status": null,
                    "TZ": "ET"
                },
                "2": {
                    "date": "",
                    "startTime": "",
                    "endTime": "",
                    "type": null,
                    "status": null,
                    "TZ": "ET"
                },
                "3": {
                    "date": "",
                    "startTime": "",
                    "endTime": "",
                    "type": null,
                    "status": null,
                    "TZ": "ET"
                }
            },
            "rooms": {
                "1": {
                    "features": null,
                    "level": null,
                    "length": null,
                    "width": null,
                    "description": null,
                    "features3": null,
                    "features2": null
                },
                "2": {
                    "features": null,
                    "level": null,
                    "length": null,
                    "width": null,
                    "description": null,
                    "features3": null,
                    "features2": null
                },
                "3": {
                    "features": null,
                    "level": null,
                    "length": null,
                    "width": null,
                    "description": null,
                    "features3": null,
                    "features2": null
                },
                "4": {
                    "features": null,
                    "level": null,
                    "length": null,
                    "width": null,
                    "description": null,
                    "features3": null,
                    "features2": null
                },
                "5": {
                    "features": null,
                    "level": null,
                    "length": null,
                    "width": null,
                    "description": null,
                    "features3": null,
                    "features2": null
                },
                "6": {
                    "features": null,
                    "level": null,
                    "length": null,
                    "width": null,
                    "description": null,
                    "features3": null,
                    "features2": null
                },
                "7": {
                    "features": null,
                    "level": null,
                    "length": null,
                    "width": null,
                    "description": null,
                    "features3": null,
                    "features2": null
                },
                "8": {
                    "features": null,
                    "level": null,
                    "length": null,
                    "width": null,
                    "description": null,
                    "features3": null,
                    "features2": null
                },
                "9": {
                    "features": null,
                    "level": null,
                    "length": null,
                    "width": null,
                    "description": null,
                    "features3": null,
                    "features2": null
                },
                "10": {
                    "features": null,
                    "level": null,
                    "length": null,
                    "width": null,
                    "description": null,
                    "features3": null,
                    "features2": null
                },
                "11": {
                    "features": null,
                    "level": null,
                    "length": null,
                    "width": null,
                    "description": null,
                    "features3": null,
                    "features2": null
                },
                "12": {
                    "features": null,
                    "level": null,
                    "length": null,
                    "width": null,
                    "description": null,
                    "features3": null,
                    "features2": null
                }
            },
            "taxes": {
                "annualAmount": "0.00",
                "assessmentYear": "2024"
            },
            "timestamps": {
                "idxUpdated": "2024-04-04T10:00:50.000Z",
                "listingUpdated": "2024-04-04T05:33:39.000Z",
                "photosUpdated": "2024-02-09T19:49:59.000Z",
                "conditionalExpiryDate": null,
                "terminatedDate": null,
                "suspendedDate": null,
                "listingEntryDate": null,
                "closedDate": null,
                "unavailableDate": null,
                "expiryDate": null,
                "extensionEntryDate": null,
                "possessionDate": null,
                "repliersUpdatedOn": "2024-10-08T14:43:42.834Z"
            },
            "agents": [],
            "commercial": {
                "amps": "",
                "areaInfluences": {
                    "1": "",
                    "2": ""
                },
                "baySize": {
                    "1": {
                        "inches": "",
                        "feet": ""
                    },
                    "2": {
                        "inches": "",
                        "feet": ""
                    }
                },
                "expenses": {
                    "operating": "",
                    "yearly": "",
                    "insurance": "",
                    "maintenance": "",
                    "management": "",
                    "water": ""
                },
                "businessType": "Retail Store Related",
                "ceilingHeightInches": "",
                "ceilingHeightFeet": "",
                "chattels": "",
                "commonAreaUpcharge": "",
                "communityCode": "09.09.0030",
                "crane": "",
                "energyCertified": "",
                "financialStatementsAvailable": "",
                "franchise": "",
                "freestanding": "Y",
                "greenPropertyInfoStatement": "",
                "grossSalesIncome": "",
                "handicapEquipped": "",
                "operatingHours": "",
                "industrialArea": "",
                "industrialAreaCode": "",
                "inventoryValuesAtCost": "",
                "llbo": "",
                "lotCode": "Building",
                "listPriceCode": "Per Sq Ft",
                "minLeaseTermMonths": "60",
                "officeArea": "",
                "officeAreaCode": "",
                "outsideStorage": "",
                "outOfAreaMunicipality": "",
                "percentageBuilding": "",
                "percentageRent": "",
                "rail": "N",
                "retailArea": "1200",
                "retailAreaCode": "Sq Ft",
                "sewer": "San+Storm",
                "shippingDoors": {
                    "driveIn": {
                        "heightFeet": "",
                        "heightInches": "",
                        "number": "",
                        "widthFeet": "",
                        "widthInches": ""
                    },
                    "doubleMan": {
                        "heightFeet": "",
                        "heightInches": "",
                        "number": "",
                        "widthFeet": "",
                        "widthInches": ""
                    },
                    "gradeLevel": {
                        "heightFeet": "",
                        "heightInches": "",
                        "number": "",
                        "widthFeet": "",
                        "widthInches": ""
                    },
                    "truckLevel": {
                        "heightFeet": "",
                        "heightInches": "",
                        "number": "",
                        "widthFeet": "",
                        "widthInches": ""
                    }
                },
                "soilTest": "",
                "sprinklers": "Y",
                "survey": "",
                "maxLeaseTermMonths": "120",
                "totalAreaCode": "Sq Ft",
                "trailerParkingSpots": "",
                "assessment": "",
                "taxType": "T.M.I.",
                "uffi": "",
                "utilities": "Y",
                "vacancyAllowance": "",
                "sellerPropertyInfoStatement": "N",
                "volts": "",
                "water": "Municipal",
                "waterSupplyType": "",
                "zoning": "Commercial/Retail"
            },
            "photoCount": 1,
            "boardId": 2
        }
    ]
}

const MapComponent = () => {
  const createCustomMarkerIcon = (label, price) => {
    return L.divIcon({
      html: `
        <div class="relative flex items-center bg-blue-700 text-white rounded-lg px-2 py-1 shadow-md w-28">
          <div class="bg-white text-blue-700 font-bold rounded-md px-2 py-1 mr-2">${label}</div>
          <div class="font-bold text-white">$ ${price}</div>
          <div class="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-blue-700"></div>
        </div>`,
      iconSize: [50, 50],
      iconAnchor: [25, 50],
    });
  };

  const createClusterCustomIcon = (cluster) => {
    const count = cluster.getChildCount();
    return L.divIcon({
      html: `<div class="flex items-center justify-center bg-blue-700 text-white rounded-full w-12 h-12">${count}</div>`,
      className: 'custom-cluster-icon',
      iconSize: L.point(45, 45, true),
    });
  };
  const formatPrice = (price) => {
    if (price >= 1000000) {
      return (price / 1000000).toFixed(1) + 'M';
    } else if (price >= 1000) {
      return Math.round(price / 1000) + 'K';
    } else {
      return price;
    }
  };
  const formatNumber = (num) => {
    const number = Number(num);
    return number % 1 === 0 ? number.toFixed(0) : number.toFixed(1);
  };

  const mapCorinates = Data.listings.map((item) => ({
    lat: item.map.latitude,
    lng: item.map.longitude,
    propertyPrice: item.listPrice,
    propertyType: item.details.propertyType,
    price: formatPrice(item.listPrice), 
    title: item.details.propertyType.charAt(0), // Just an example for title
    address: `${item.address.streetNumber} ${item.address.streetName}, ${item.address.city}, ${item.address.zip}`,
    bathroomsCount: item.details.numBathrooms,
    roomsCount: item.details.numBedrooms,
    garage: item.details.numGarageSpaces || item.details.numParkingSpaces !== null 
        ? `${formatNumber(item.details.numParkingSpaces)} + ${formatNumber(item.details.numGarageSpaces)}` 
        : 0,
  }));
  const throttle = (func, limit) => {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  };

  const MapBoundsLogger = () => {
    const map = useMap();
  
    useEffect(() => {
        const logBounds = throttle(() => {
            const bounds = map.getBounds();
          }, 1000)

      map.on('moveend', logBounds);
      map.on('zoomend', logBounds);
      logBounds();

      return () => {
        map.off('moveend', logBounds);
        map.off('zoomend', logBounds);
      };
    }, [map]);

    return null;
  };
  const AdjustMapPaneZIndex = () => {
    const map = useMap();
    
    // Adjust zIndex for all panes
    map.getPane('tilePane').style.zIndex = -1000;
    map.getPane('overlayPane').style.zIndex = -1000;
    map.getPane('shadowPane').style.zIndex = -1000;
    map.getPane('markerPane').style.zIndex = -1000;
    map.getPane('tooltipPane').style.zIndex = -1000;
    map.getPane('popupPane').style.zIndex = -1000;
  
    return null;
  };

  return (
    <MapContainer
      center={[44.2266207, -79.4653374]}
      zoom={15}
      style={{ height: '100vh', width: '100%' }}
    >
      <TileLayer
      zIndex={-1000}
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <MapBoundsLogger />
      <AdjustMapPaneZIndex />
      <MarkerClusterGroup chunkedLoading iconCreateFunction={createClusterCustomIcon}>
        {mapCorinates.map((position, index) => (
          <Marker key={index} position={[position.lat, position.lng]} icon={createCustomMarkerIcon(position.title, position.price)}>
            <Popup className='leafletPopup'>
              <div className="flex flex-row w-96 gap-2 border border-gray-300 rounded-xl p-2 font-open-sans">
                <img src={home1} alt="home" className="w-28 h-28 object-cover rounded-lg" />
                <div className="flex flex-col gap-2">
                  <h3 className="text-base font-bold">$ {position.propertyPrice}</h3>
                  <p className='text-xs mr-0'>{position.address}</p>
                  <div className='flex items-center divide-x-2 gap-3'>
                    <div className='flex items-center gap-1'>
                      <IoBedOutline />
                      <span>{position.roomsCount}</span>
                    </div>
                    <div className='flex items-center gap-1 pl-2'>
                      <LiaBathSolid />
                      <span>{position.bathroomsCount}</span>
                    </div>
                    <div className='flex items-center gap-1 pl-2'>
                      <GiHomeGarage />
                      <span>{position.garage}</span>
                    </div>
                  </div>
                  <p>{position.propertyType}</p>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
};

export default MapComponent;
