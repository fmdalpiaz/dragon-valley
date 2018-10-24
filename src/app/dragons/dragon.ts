export class Dragon {
    private _name: string;
    private _slug: string;
    private _type: string;
    private _createdAt: string;

    constructor(data: any) {
        this._name = data.name || '';
        this._slug = data.slug || '';
        this._type = data.type || '';
        this._createdAt = data.created_at || '';
    }

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    get slug(): string {
        return this._slug;
    }

    set slug(slug: string) {
        this._slug = slug;
    }

    get type(): string {
        return this._type;
    }

    set type(type: string) {
        this._type = type;
    }

    get createdAt(): string {
        return this._createdAt;
    }

    set createdAt(createdAt: string) {
        this._createdAt = createdAt;
    }

}
