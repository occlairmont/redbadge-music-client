export interface UserEvents {
    id?: number;
    owner?: number;
    date?: Date;
    artist?: string;
    location?: string;
    time?: string;
    link?: string;
}

export interface Options {
    display_listen_unit: boolean;
}

export interface Artist {
    id: string;
    name: string;
    url: string;
    mbid: string;
    options: Options;
    image_url: string;
    thumb_url: string;
    facebook_page_url: string;
    tracker_count: number;
    upcoming_event_count: number;
    support_url: string;
}

export interface Venue {
    country: string;
    city: string;
    timezone: string;
    name: string;
    location: string;
    region: string;
    type: string;
}

export interface EventResponse {
    id?: string;
    url?: string;
    datetime?: Date;
    title?: string;
    description?: string;
    artist?: Artist;
    venue?: Venue;
    lineup?: string[];
    offers?: any[];
    artist_id?: string;
    on_sale_datetime?: string;
}

