export class Result {
  id: string
  title: string
  desc: string
  thumbnailUrl: string
  videoUrl: string

  constructor(obj?: any) {
    this.id           = obj && obj.id           || null
    this.title        = obj && obj.title        || null
    this.desc         = obj && obj.desc         || null
    this.thumbnailUrl = obj && obj.thumbnailUrl || null
    this.videoUrl     = obj && obj.videoUrl     || `https://www.youtube.com/watch?v=${this.id}`
  }

}