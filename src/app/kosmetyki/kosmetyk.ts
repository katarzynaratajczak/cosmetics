export interface KosmetykAttrs {

  id: number;
  name: string;
  cost: number;
  componenet: string;
}


export class Kosmetyk {
  id: number;
  name: string;
  cost: number;
  componenet: string;

  constructor(kosmetykAttrs: Partial<KosmetykAttrs> = {}) {
    this.id = kosmetykAttrs.id;
    this.name = kosmetykAttrs.name;
    this.cost = kosmetykAttrs.cost;
    this.componenet = kosmetykAttrs.componenet;
  }

}
