// TODO -< ПО перше папки interfaces не може бути, це завди папки types, а по друге, якщо можеш зробити type замість interface, то роби type завжди + давай завжди префікс: якщо тип то "type TProfile", якщо інтерфейс то "interface IProfile"
export interface Profile {
  id: number;
  username: string;
  avatarUrl: null | string;
  subscribersAmount: number;
  firstName: string;
  lastName: string;
  isActive: boolean;
  stack: string[];
  city: string;
}

// TODO -< папки data не буває, і інтерфеси завжди мають папки дял себе на найвищому рівні вложеності, точно зразу в папці "app"