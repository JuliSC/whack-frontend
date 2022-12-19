export interface GameMode {
  id: number;
  name: string;
}

export interface Region {
  id: number;
  name: string;
}

export interface Division {
  id: number;
  name: string;
}

export interface Tier {
  id: number;
  name: string;
}

export interface Champion {
  id: number;
  name: string;
}

export interface Position {
  id: number;
  name: string;
}

export interface Rank {
  id: number;
  lp: number;
  tierId: number;
  divisionId: number;
  gameModeId: number;
  tier: Tier;
  division: Division;
  gameMode: GameMode;
}

export interface Summoner {
  id: number;
  summonerName: string;
  icon: number;
  level: number;
  rankId: number;
  regionId: number;
  isAdmin: boolean;
  rank: Rank;
  region: Region;
}

export interface Participant {
  assists: number;
  baronKills: number;
  championId: number;
  champion: Champion;
  consumablesPurchased: number;
  damageDealtToBuildings: number;
  damageDealtToObjectives: number;
  damageDealtToTurrets: number;
  damageSelfMitigated: number;
  deaths: number;
  doubleKills: number;
  id: number;
  kills: number;
  pentaKills: number;
  positionId: number;
  position: Position;
  quadraKills: number;
  summonerId: number;
  summoner: Summoner;
  teamId: number;
  tripleKills: number;
}

export interface Team {
  id: number;
  matchId: number;
  matchWon: boolean;
  participants: Participant[];
}

export interface Match {
  id: number;
  duration: number;
  gameCreation: string;
  gameMode: GameMode;
  gameModeId: number;
  teams: Team[];
}
