/**
 * ScraperController
 *
 * @description :: Scraper
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    consensus: function (req, res) {
        var scrapy = require('node-scrapy');
        var url = 'https://www.fantasypros.com/nfl/rankings/consensus-cheatsheets.php';
        var model =
            {
                players: {
                    ranks: ".player-table tr[class^='mpb-player-'] td:nth-child(1)",
                    names: ".player-table tr[class^='mpb-player-'] .player-label .fp-player-link",
                    teams: ".player-table tr[class^='mpb-player-'] .player-label small",
                    positions: ".player-table tr[class^='mpb-player-'] td:nth-child(3)",
                    byes: ".player-table tr[class^='mpb-player-'] td:nth-child(4)",
                    adps: ".player-table tr[class^='mpb-player-'] td:nth-child(9)"
                }
            };

        scrapy.scrape(url, model, function (err, data) {
            if (err) return console.error(err)
            console.log(data)
        });

        res.view();
    },
    idp: function (req, res) {
        var scrapy = require('node-scrapy');
        var url = 'https://www.fantasypros.com/nfl/rankings/idp-cheatsheets.php';
        var model =
            {
                players: {
                    ranks: ".player-table tr[class^='mpb-player-'] td:nth-child(1)",
                    names: ".player-table tr[class^='mpb-player-'] .player-label .fp-player-link",
                    teams: ".player-table tr[class^='mpb-player-'] .player-label small",
                    positions: ".player-table tr[class^='mpb-player-'] td:nth-child(3)",
                    byes: ".player-table tr[class^='mpb-player-'] td:nth-child(4)"
                }
            };

        scrapy.scrape(url, model, function (err, data) {
            if (err) return console.error(err)
            console.log(data)
        });

        res.view();
    }
};