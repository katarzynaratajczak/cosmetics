export interface KosmetykAttrs {

  id: number;
  category: string;
  name: string;
  cost: number;
  component: string;
}


export class Kosmetyk {
  id: number;
  category: string;
  name: string;
  cost: number;
  component: string;

  constructor(kosmetykAttrs: Partial<KosmetykAttrs> = {}) {
    this.id = kosmetykAttrs.id;
    this.category = kosmetykAttrs.category;
    this.name = kosmetykAttrs.name;
    this.cost = kosmetykAttrs.cost;
    this.component = kosmetykAttrs.component;
  }

}
