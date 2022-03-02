# Tropical Vibes Web Server

### Development Setup Notes

Fake seed data:
```
psql postgresql://postgres:postgres@localhost:5432/

INSERT INTO daily_delegations(stake_address, live_stake, date_credited) VALUES ('stake1u8jgfjh8lhjwq75lv62pnt3p3l4u82ypgr73aqk7ygj4f0sx4aaaa', 2111111111, '01/31/22');

INSERT INTO daily_delegations(stake_address, live_stake, date_credited) VALUES ('stake1u8jgfjh8lhjwq75lv62pnt3p3l4u82ypgr73aqk7ygj4f0sx4aaaa', 2111111111, '02/02/22');

INSERT INTO daily_delegations(stake_address, live_stake, date_credited) VALUES ('stake1u8jgfjh8lhjwq75lv62pnt3p3l4u82ypgr73aqk7ygj4f0sx4cccc', 2333333333, '02/01/22');

```