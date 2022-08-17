export interface HoursItemI {
    closes_at:  string,
    is_closed: boolean,
    opens_at:  string,
}

export interface ProductItemI {
    address: string,
    description: string,
    hours: {
        friday: HoursItemI,
        monday: HoursItemI,
        saturday: HoursItemI,
        sunday: HoursItemI,
        thursday: HoursItemI,
        tuesday: HoursItemI,
        wednesday: HoursItemI,
    },
    id: number,
    logo: string,
    name: string,
    phone_number: string,
    review: string,
    type: string,
    uid: string,
}