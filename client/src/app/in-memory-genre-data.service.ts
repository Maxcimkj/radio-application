import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryGenreDataService implements InMemoryDbService {
  createDb() {
    const genres = [
      {id: 1, name: 'Ambient', main: -9},
      {id: 2, name: 'Ambient Dub', main: 1},
      {id: 3, name: 'Dark Ambient', main: 1},
      {id: 4, name: 'Dungeon Synth', main: 1},
      {id: 5, name: 'Space Ambient', main: 1},
      {id: 6, name: 'Tribal Ambient', main: 1},
      {id: 7, name: 'Folk', main: -9},
      {id: 8, name: 'Contemporary Folk', main: 7},
      {id: 9, name: 'Traditional Folk Music', main: 7}
    ];
    const tracks = [
      {
        id: 1, name: 'Beautiful Lie', artist: 'Hans Zimmer1', release: 'Batman V Superman: Dawn Of Justice',
        duration: 227, style: 'rock',
        cover: 'http://onetwo.tv/storage/images/covers/250x250/0/0/4/67/ef6219bv4rkg.jpg',
        url: 'http://onetwo.tv/storage/media/releases/0/0/4/67/olq92p6id34w/01%20-%20Hans%20Zimmer%20And%20Junkie%20XL%20-%20Beautiful%20Lie.mp3'
      },
      {
        id: 2, name: 'Their War Here', artist: 'Hans Zimmer1', release: 'Batman V Superman: Dawn Of Justice',
        duration: 276, style: 'rock',
        cover: 'http://onetwo.tv/storage/images/covers/250x250/0/0/4/67/ef6219bv4rkg.jpg',
        url: 'http://onetwo.tv/storage/media/releases/0/0/4/67/olq92p6id34w/02%20-%20Hans%20Zimmer%20And%20Junkie%20XL%20-%20Their%20War%20Here.mp3'
      },
      {
        id: 3, name: 'The Red Capes Are Coming', artist: 'Hans Zimmer1', release: 'Batman V Superman: Dawn Of Justice',
        duration: 212, style: 'rock',
        cover: 'http://onetwo.tv/storage/images/covers/250x250/0/0/4/67/ef6219bv4rkg.jpg',
        url: 'http://onetwo.tv/storage/media/releases/0/0/4/67/olq92p6id34w/03%20-%20Hans%20Zimmer%20And%20Junkie%20XL%20-%20The%20Red%20Capes%20Are%20Coming.mp3'
      },
      {
        id: 4, name: 'Day Of The Dead', artist: 'Hans Zimmer2', release: 'Batman V Superman: Dawn Of Justice',
        duration: 242, style: 'metal',
        cover: 'http://onetwo.tv/storage/images/covers/250x250/0/0/4/67/ef6219bv4rkg.jpg',
        url: 'http://onetwo.tv/storage/media/releases/0/0/4/67/olq92p6id34w/04%20-%20Hans%20Zimmer%20And%20Junkie%20XL%20-%20Day%20Of%20The%20Dead.mp3'
      },
      {
        id: 5, name: 'Must There Be A Superman?', artist: 'Hans Zimmer2', release: 'Batman V Superman: Dawn Of Justice',
        duration: 243, style: 'rock',
        cover: 'http://onetwo.tv/storage/images/covers/250x250/0/0/4/67/ef6219bv4rkg.jpg',
        url: 'http://onetwo.tv/storage/media/releases/0/0/4/67/olq92p6id34w/05%20-%20Hans%20Zimmer%20And%20Junkie%20XL%20-%20Must%20There%20Be%20A%20Superman_.mp3'
      },
      {
        id: 6, name: 'New Rules', artist: 'Hans Zimmer2', release: 'Batman V Superman: Dawn Of Justice',
        duration: 244, style: 'metal',
        cover: 'http://onetwo.tv/storage/images/covers/250x250/0/0/4/67/ef6219bv4rkg.jpg',
        url: 'http://onetwo.tv/storage/media/releases/0/0/4/67/olq92p6id34w/06%20-%20Hans%20Zimmer%20And%20Junkie%20XL%20-%20New%20Rules.mp3'
      },
    ];
    return {genres, tracks};
  }
}
