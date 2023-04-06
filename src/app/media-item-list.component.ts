import { Component } from "@angular/core";

@Component({
  selector: "mw-media-item-list",
  templateUrl: "./media-item-list.component.html",
  styleUrls: ["./media-item-list.component.css"],
})
export class MediaItemListComponent {
  mediaItems = [
    {
      id: 1,
      name: "Firebug",
      medium: "Series",
      category: "Science Fiction",
      year: 2010,
      watchedOn: 1294166565384,
      isFavourite: false,
    },
    {
      id: 2,
      name: "The Small Tall",
      medium: "Movies",
      category: "Comedy",
      year: 2015,
      watchedOn: null,
      isFavourite: true,
    },
    {
      id: 3,
      name: "The Redemption",
      medium: "Movies",
      category: "Action",
      year: 2016,
      watchedOn: null,
      isFavourite: false,
    },
    {
      id: 4,
      name: "Hoopers",
      medium: "Series",
      category: "Drama",
      year: null,
      watchedOn: null,
      isFavourite: true,
    },
    {
      id: 5,
      name: "Happy Joe: Cheery Road",
      medium: "Movies",
      category: "Action",
      year: 2015,
      watchedOn: 1457166565384,
      isFavourite: false,
    },
  ];

  onMediaItemDelete(mediaItem) {}
}
