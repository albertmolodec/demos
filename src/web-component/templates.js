const jonSnowImageSrc =
  'https://cdn.vox-cdn.com/thumbor/l9l4iztkKVgnxD0vMmqYwknBZu4=/99x0:1179x810/1400x1400/filters:focal(99x0:1179x810):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/46094226/Jon_snow.0.jpg'

export const getUserCardHTML = ({
  name = 'Jon',
  surname = 'Snow',
  age = '14',
  imgsrc = jonSnowImageSrc,
}) => /*html*/ `
<div class="card">
  <img id="imgsrc" class="card__avatar" src="${imgsrc}" alt="User avatar">
  <div class="card__info">
    <div class="card__name">
      <span id="name">${name}</span>
      <span id="surname">${surname}</span>
    </div>
    <div class="card__age">
    <span id="age">${age}</span> y.o.
    </div>
  </div>
</div>`

export const userCardStyles = `
* {
  box-sizing: border-box;
}

.card {
  font-family: Roboto, Helvetica Neue, Helvetica, Arial, "sans-serif";
  font-weight: 300;
  color: white;
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background-color: #262626;
}

.card__avatar {
  max-height: 70%;
  object-fit: contain;
  object-position: center center;
  padding: 20px;
  display: flex;
  flex-basis: 70%;
}

.card__info {
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex-basis: 30%;
}

.card__name {
  font-size: 24px;
}

.card__name::after {
  content: "";
  display: block;
  width: 20%;
  height: 2px;
  background-color: #f2d423;
  margin: 5px 0 3px;
}

.card__age {
  font-size: 15px;
  margin-top: 8px;
}
`
