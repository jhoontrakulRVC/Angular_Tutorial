export class DiveLogEntry {
    site: string;
    location: string;
    depth: Number;
    time: Number;

    static StockDives: DiveLogEntry[] = [
        {
            site: 'The Similans',
            location: 'Andaman Sea, Thailand',
            depth: 20,
            time: 54
        },
        {
            site: 'Aung Tong',
            location: 'Koh Samui, Thailand',
            depth: 18,
            time: 61
        },
        {
            site: 'Koh Laan',
            location: 'Pattaya, Thailand',
            depth: 19,
            time: 39
        }
    ];
}