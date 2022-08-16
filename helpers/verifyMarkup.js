const verifyMarkup = (email) => {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Kapusta</title>
    <style type="text/css">
      .bg {
        background-image: url("https://drive.google.com/file/d/1-0aF4DxgXC3ilcreKUn3zAMbEqAOLo5M/view?usp=sharing"),
          url("https://drive.google.com/file/d/1AfiHkLfaRM5RjZWjaoMFYyKgpTsIKxLu/view?usp=sharing"),
          linear-gradient(180deg, (#f5f6fb 60%), (#ffffff 60%));
        background-repeat: no-repeat;
        background-position: top 84px left 10px, bottom 56px left 103px, center;
      }
      .authPage {
        min-width: 320px;
        height: 100vh;
        margin: 0 auto;
        padding: 40px 20px 34px;
        text-align: center;
      }

      .wrap {
        position: relative;
        display: block;
      }
      .title {
        position: absolute;
        top: 50px;
        left: 50px;
        margin-bottom: 8px;

        font-size: 34px;
        font-weight: 900;
        font-size: 78px;
        line-height: 1.17;
        color: #000;
      }
      .text {
        position: absolute;
        top: 100px;
        left: 100px;
        margin-bottom: 24px;
        font-weight: 700;
        font-size: 13px;
        line-height: 1.15;
        letter-spacing: 0.15em;
        text-transform: uppercase;
      }
      .link {
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;

        width: 115px;
        height: 44px;

        font-weight: 700;
        font-size: 12px;
        line-height: 1.17;

        text-align: center;
        letter-spacing: 0.02em;
        text-transform: uppercase;

        color: #fff;
        background-color: rgba(255, 117, 29, 1);
        border: none;
        border-radius: 15px;

        cursor: pointer;
      }

      @media screen and (min-width: 480px) {
        .authPage {
          width: 480px;
        }
      }

      @media screen and (min-width: 768px) {
        .bg {
          background-position: top 84px left 10px, bottom 56px left 103px,
            center;
        }
        .authPage {
          width: 768px;
          padding: 80px 115px 70px;
        }
        .title {
          margin-right: auto;
          margin-bottom: 20px;
          font-size: 102px;
        }
        .text {
          margin-right: auto;
          font-size: 16px;
          line-height: 1.18;
          letter-spacing: 0.18em;
        }
        .link {
          width: 125px;
        }
      }

      @media screen and (min-width: 1280px) {
        .bg {
          background-position: top 84px left 320px, bottom 150px left 450px,
            center;
        }
        .authPage {
          display: flex;
          flex-direction: column;
          align-items: center;

          width: 1280px;
          height: 100vh;
          padding: 100px 125px;
        }

        .wrap {
          width: 420px;
          margin-right: 112px;
        }

        .text {
          font-size: 18px;
        }
      }
    </style>
  </head>
  <body class="bg" style="text-align: center">
    <div class="authPage">
      <div className="{s.wrap}">
        <h1 className="{s.title}">Kapusta</h1>
        <p className="{s.text}">Smart Finance</p>
      </div>
      <h2>${email} verification succcessful</h2>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa0yidZrerQQKXwAmX6Lz8qzfupmmfRfP6Spn0ZV5RotYfhAYMmnd1WVM2E8dLsXOlGcM&usqp=CAU"
        alt="congratulation, verification confirmed"
        style="display: block"
      />
      <a href="https://alxkkt.github.io/kapusta-bank-client/auth" class="link">
        Log In
      </a>
    </div>
  </body>
</html>
`;
};

module.exports = verifyMarkup;
