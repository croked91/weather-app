import { createEvent } from 'effector';
import { createStore } from 'effector';
import { DaDataAddress, DaDataSuggestion } from 'react-dadata';

export type WrappedAdressSuggestionsT = {
    callback: (e: DaDataSuggestion<DaDataAddress>) => void
    value: DaDataSuggestion<DaDataAddress>
}

export const getCurrentCity = createEvent<DaDataSuggestion<DaDataAddress>>()

export const $currentCity = createStore<DaDataSuggestion<DaDataAddress>>(
    {
        value: "",
        unrestricted_value: "",
        data: {
            "postal_code": null,
            "country": "",
            "country_iso_code": "",
            "federal_district": null,
            "region_fias_id": "",
            "region_kladr_id": "",
            "region_iso_code": "",
            "region_with_type": "",
            "region_type": "",
            "region_type_full": "",
            "region": "",
            "area_fias_id": null,
            "area_kladr_id": null,
            "area_with_type": null,
            "area_type": null,
            "area_type_full": null,
            "area": null,
            "city_fias_id": "",
            "city_kladr_id": "",
            "city_with_type": "",
            "city_type": "",
            "city_type_full": "",
            "city": "",
            "city_area": null,
            "city_district_fias_id": null,
            "city_district_kladr_id": null,
            "city_district_with_type": null,
            "city_district_type": null,
            "city_district_type_full": null,
            "city_district": null,
            "settlement_fias_id": null,
            "settlement_kladr_id": null,
            "settlement_with_type": null,
            "settlement_type": null,
            "settlement_type_full": null,
            "settlement": null,
            "street_fias_id": "",
            "street_kladr_id": "",
            "street_with_type": "",
            "street_type": "",
            "street_type_full": "",
            "street": "",
            "stead_fias_id": null,
            "stead_cadnum": null,
            "stead_type": null,
            "stead_type_full": null,
            "stead": null,
            "house_fias_id": null,
            "house_kladr_id": null,
            "house_cadnum": null,
            "house_type": null,
            "house_type_full": null,
            "house": null,
            "block_type": null,
            "block_type_full": null,
            "block": null,
            "entrance": null,
            "floor": null,
            "flat_fias_id": null,
            "flat_cadnum": null,
            "flat_type": null,
            "flat_type_full": null,
            "flat": null,
            "flat_area": null,
            "square_meter_price": null,
            "flat_price": null,
            "postal_box": null,
            "fias_id": "",
            "fias_code": "",
            "fias_level": "",
            "fias_actuality_state": "",
            "kladr_id": "",
            "geoname_id": "",
            "capital_marker": "0",
            "okato": "",
            "oktmo": "",
            "tax_office": "",
            "tax_office_legal": "",
            "timezone": null,
            "geo_lat": "",
            "geo_lon": "",
            "beltway_hit": null,
            "beltway_distance": null,
            "metro": null,
            "divisions": null,
            "qc_geo": null,
            "qc_complete": null,
            "qc_house": null,
            "history_values": [
                "ул Черненко"
            ],
            "unparsed_parts": null,
            "source": null,
            "qc": null
        }
    }
)
    .on(getCurrentCity, (_, city) => city )


