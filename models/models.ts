export interface IUser {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    street: string;
    city: string;
    state: string;
    postcode: Number;
    coordinates: {
      latitude: string;
      longitude: string;
    };
    timezone: {
      offset: string;
      description: string;
    };
  };
  email: string;
  login: {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
  };
  dob: {
    date: string;
    age: 23;
  };
  registered: {
    date: string;
    age: 8;
  };
  phone: string;
  cell: string;
  id: {
    name: string;
    value: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
}

export interface IAuthUser {
  username: string;
  email: string;
  user_id: number | null;
  isAuthenticated: boolean;
}

export interface IWatchList {
  re_id: number;
  address: [
    {
      catname: string;
      catfathername: string;
      avWinloss: number;
      avPrice_sq: string;
    }
  ];
}

export interface IProperty {
  avWinloss: any;
  avPrice_sq: number;
  catname: string;
  re_id: number;
}

export interface IHistory {
  re_id: number;
  addr: string;
  catfathername: string;
  // imgurl:string;
  transactions: [
    {
      re_id: number;
      price_value: number;
      date: any;
      winloss: number;
      img_url: null | string;
      id: number;
      ht_id: number;
    }
  ];
}
