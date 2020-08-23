export class API {
  constructor(artist, title) {
    this.artist = artist;
    this.title = title;
  }

  async consultaAPI() {
    const url = await fetch(
      `https://api.lyrics.ovh/v1/${this.artist}/${this.title}`
    );

    const response = await url.json();

    return {
      response
    };
  }
}
