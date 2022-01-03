export type Treducer = (state: Tstate, action: TmenuAction) => Tstate;

export type Tstate = {
  menus: Tmenu[];
  currentTab: Tcategory;
  categories: Tcategory[];
};

export type Tprops = {
  state: Tstate;
};

export type TmenuAction = {
  type: string;
  payload: {
    categoryId?: string;
    menuIdx?: number;
    menuName?: string;
  };
};

export type Tmenu = {
  categoryId: string;
  menuName: string;
};

export type Tcategory = {
  id: string;
  name: string;
};

export type Tlistener = () => void;
