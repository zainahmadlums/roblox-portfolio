import { useState } from 'react';
import PortfolioItem from '../components/PortfolioItem';
import PortfolioModal from '../components/PortfolioModal';
import Divider from '../components/Divider';
import FeaturedItem from '../components/FeaturedItem';

const portfolioData = [
  { 
    id: 1000, 
    title: 'Pogo Legends Pet System', 
    featured: true,
    description: 'A fully modular hatching and inventory system handling weighted hatching probabilities and hatch animations, rarities, shiny evolved pets, searching, sorting and filtering, equipping and deletion, boosts, and player following.',
    media: [
      'https://youtu.be/nTGNeXSA6bw'
    ] 
  },
  {
    id: 1001, 
    title: 'Power Legends', 
    featured: true,
    description: 'This video shows a short overview of many intercommunicating systems for a simulator-esque game, featuring aura, stats, playtime and code rewards, grinding tools and shop, robux shop, enemy spawners and boxing combat.',
    media: [
      'https://youtu.be/f84JvXIiihA'
    ] 
  },
  { 
    id: 24, 
    title: 'NPC Vehicle System', 
    description: 'This allows creation of NPC vehicles with configurable settings across many paths, respecting standing physics and allowing traversal for obby courses.',
    media: [
      'https://thumb.gyazo.com/thumb/1200_w/eyJhbGciOiJIUzI1NiJ9.eyJpbWciOiJfODYyNGEyYzg5ZmU0ZTk1NjIxNTQ1YmI2MTdiNWY2ODEifQ.OxQK9U8R5I6kNypEtJ_UfxOdYONwDaveo_xWotM1rNc-gif.gif',
      'https://thumb.gyazo.com/thumb/1200_w/eyJhbGciOiJIUzI1NiJ9.eyJpbWciOiJfZGZhMTVlMDMwNWZmNTFjNWEyMTMxNTUwZDQ5MDBjNTgifQ.FsSZJkZGcwfRd0rmx6iNFK0Je2Nx4LBHGwa1DZ_jE7E-gif.gif',
      'https://thumb.gyazo.com/thumb/1200_w/eyJhbGciOiJIUzI1NiJ9.eyJpbWciOiJfMTU4NDI1YWJkNDBjYzFhM2YxMTQ3MjAzM2RkMTQ5YzgifQ.2jHAMtXwcKigINm1EDv0uBhGXohP1R_Hxa6ZCbvIu-8-gif.gif',
      'https://thumb.gyazo.com/thumb/1200_w/eyJhbGciOiJIUzI1NiJ9.eyJpbWciOiJfMjkxYzk5Njg3ZDEzZDkxNWM4MzFiMDQ4MWY2ZTNjNjkifQ.l7eRNX5mIZ_DgJD7Q0j_HEWNuAAihrmUviRsxSAgdHc-gif.gif'
    ] 
  },
  { 
    id: 16, 
    title: 'Cart Rider IK', 
    description: 'IK-based animations allowing (and replicating to other players) grip on edges of cart, movement indication, and camera look indication',
    media: [
      'https://thumb.gyazo.com/thumb/1200_w/eyJhbGciOiJIUzI1NiJ9.eyJpbWciOiJfYmI1ZTQ1ZTIxYThjNjYzMTZkODIwNDUwNmZmNTI1MjQifQ.4jGQAzOeek3FBO7bERaJkEOK-gqJFx1PaQEe1wu9FgU-gif.gif'
    ] 
  },
  { 
    id: 9, 
    title: 'Dragon Ball Z Fusion & Potara System', 
    description: 'Click on character to interact, fuse with other player upon consent, control the merged clothing and colors, spectate while fused, and escape to end functionality.',
    media: [
      'https://thumb.gyazo.com/thumb/1200_w/eyJhbGciOiJIUzI1NiJ9.eyJpbWciOiJfOGJkMzVmMThlOWNlNTg2MGI1ZmJlNTk3MTkwYjc2NGEifQ.ie2hsZblDAlWZl77L9vQ5qaiDgkT_MVfizBHui3_QVw-gif.gif',
      'https://thumb.gyazo.com/thumb/1200_w/eyJhbGciOiJIUzI1NiJ9.eyJpbWciOiJfNjQ5ODY1MjVhM2ExNGJlODlmMTlhZjgyMWIxYmI3YWIifQ.w1XmOiz3IFWa7kn0jnW5sDyhScaaVAiAUPVdpLBO8jQ-gif.gif',
      'https://thumb.gyazo.com/thumb/1200_w/eyJhbGciOiJIUzI1NiJ9.eyJpbWciOiJfMDBhODRhZWIyZmNlY2FkMTFhMDg2ZjJhZGZmNTAxYTQifQ.En0CycVvUc4khcw6ScUElQt7P2oM5DUlSzKYbefL2qE-gif.gif',
      'https://thumb.gyazo.com/thumb/1200_w/eyJhbGciOiJIUzI1NiJ9.eyJpbWciOiJfZWM5MDFmZTExZWI1NjYwYzU1YTU0NjU3MTc3ZmVhMmYifQ.5DFh6vCU-jyIk16kmF1FjiogX7jKoIUM3HxuV5yJEVU-gif.gif',
      'https://thumb.gyazo.com/thumb/1200_w/eyJhbGciOiJIUzI1NiJ9.eyJpbWciOiJfOWZkMGY1M2VjZTIwZmFjZGEzMjU5ZGVhMGIxNTc4YTQifQ.rhHfEtansB50Bt-oAtqcHOWRYuvCR2T_ZBo7pIzo1Io-gif.gif',
      'https://thumb.gyazo.com/thumb/1200_w/eyJhbGciOiJIUzI1NiJ9.eyJpbWciOiJfMDVkMzk4MDk0Y2Y3MTY1OTIyNzYwYjY1ODY0Mzk0YTMifQ.1GW1pz6qr-k2OlKLF1QlkpXKn_PgOwrlrT9HDEE5_HU-gif.gif'
    ] 
  },
  { 
    id: 1, 
    title: 'Basketball Animations',
    // featured: true, // ADD THIS FLAG HERE
    description: 'Basketball animations for picking, dribbling, and shooting, with seamless transitions and natural looping.',
    media: [
      'https://thumb.gyazo.com/thumb/1200_w/eyJhbGciOiJIUzI1NiJ9.eyJpbWciOiJfMzA3ZDY3ODY0NTNjNTY5YjAwN2MyZDQ4ZjU3NDQ0YTcifQ.0LOLITCRmjRF826E-9EvnfYFTBo8K68zRuF6TLYYhxU-gif.gif',
      'https://thumb.gyazo.com/thumb/1200_w/eyJhbGciOiJIUzI1NiJ9.eyJpbWciOiJfMGVkMGE1YjJjZmIwZTk0OTI0YTMwYjY0ZDFlYzA2ZGEifQ.DD-2036ainGwgCamdbejGZL3T4-2N_8IAtWCmyIGmag-gif.gif',
      'https://thumb.gyazo.com/thumb/1200_w/eyJhbGciOiJIUzI1NiJ9.eyJpbWciOiJfZDczYWE5MWMzNWQzZTcxZmMzOGM3NDNmZDYwOTQ2N2EifQ.7fBa3cJ-KjvFM_-BZgPMAJdFUVTjDHM_FvYleaf5JPM-gif.gif',
      'https://thumb.gyazo.com/thumb/1200_w/eyJhbGciOiJIUzI1NiJ9.eyJpbWciOiJfNDRjODkzNDRjYWFjNjUyMDY3OTBlMmFhNDI5MzQ2MzcifQ.r9sOvtK_2WWEkqmG30mA0kpwm5CrQdhrOfet2Hbv7OY-gif.gif'
    ] 
  },
  { 
    id: 2, 
    title: 'Basketball System', 
    // featured: true, // ADD THIS FLAG HERE
    description: 'Network-authoritative basketball gameplay loop showcasing grabbing and timed shooting system; the trajectory is calculated using Bezier curves',
    media: [
      'https://thumb.gyazo.com/thumb/1200_w/eyJhbGciOiJIUzI1NiJ9.eyJpbWciOiJfNWM5YWNiNDBmZjc0OTNkZDQyZTc4YTM5OTVkNTY0MmEifQ.8bj5gX2xdChhDhOTGK88bQ2tFXa5hmHPY1FBvSOuCbg-gif.gif',
      'https://thumb.gyazo.com/thumb/1200_w/eyJhbGciOiJIUzI1NiJ9.eyJpbWciOiJfZGQzYzQ3NThlNmJmOGE1ODk5YWQ0Y2EwNjU2ZGI4ZTYifQ.nnx9dwltAZ8btkPx8afAKtQkCsIcbMAVazrt8TLfusk-gif.gif',
      'https://thumb.gyazo.com/thumb/1200_w/eyJhbGciOiJIUzI1NiJ9.eyJpbWciOiJfOTI4NTlkZGNhN2U2OTQ5NTM5NzAyMDU3OTU2ZTEyYTAifQ.9fCPp8jpnCVwZCzgcSOagz_iv8vaaDe7i7oxTckeUBo-gif.gif'
    ] 
  },
  { 
    id: 3, 
    title: 'Simulator Pushups Tool', 
    description: 'A classic, simple simulator-style training tool with a basic animation.',
    media: [
      'https://thumb.gyazo.com/thumb/1200_w/eyJhbGciOiJIUzI1NiJ9.eyJpbWciOiJfNmU2N2JkODZhODU0MmZlOGFhZDUzMTYzZDc2ZWYwNmIifQ.nQdi0UJysgtRNgNMv79qxXVFsozBVQjIixqGMg5aT_E-gif.gif'
    ] 
  },
  { 
    id: 4, 
    title: 'Emotes System', 
    description: 'A modular emote wheel supporting custom animations (bought from shop), clean UI transitions, and proper replication.',
    media: [
      'https://thumb.gyazo.com/thumb/1200_w/eyJhbGciOiJIUzI1NiJ9.eyJpbWciOiJfOTNjNDZhMTkwMDQ0ZWNmMTdlZjZhY2YwZWY1NmE2MmEifQ.kP2Q1khIz18-9cwIirx0DFLPSVZ3oB6VKB10aE_afX4-gif.gif',
      'https://thumb.gyazo.com/thumb/1200_w/eyJhbGciOiJIUzI1NiJ9.eyJpbWciOiJfMmVjNWFlNGE4NjYzOWNmMmFkOGRhNTNlMGM4YmY0NmEifQ.s4Mrdl2x-7w8vJ2-2XHwLz-tBGGWwt4D7F2XWaZLzvo-gif.gif',
      'https://thumb.gyazo.com/thumb/1200_w/eyJhbGciOiJIUzI1NiJ9.eyJpbWciOiJfNzg5YjQxMTZmZjVmMzliOWU4YTc3YjdkNzUxODhjOGEifQ.cpt76974vaqo-U6VibIDqQ8t03QHNLAW30Y-2vkKlI4-gif.gif',
      'https://thumb.gyazo.com/thumb/1200_w/eyJhbGciOiJIUzI1NiJ9.eyJpbWciOiJfYjQzM2YzODllZThkZDk5YWRmOTBiMjc1YWUwZmYzNzcifQ.6g0tw64YTfn8fRJnZZIOT__Qk2rP7UxQkEYIHCgWR1k-gif.gif'
    ] 
  },
  { 
    id: 5, 
    title: 'Teleportation GUI', 
    description: 'Simple Pet Simulator style UI with transition effects and configurable destinations.',
    media: [
      'https://thumb.gyazo.com/thumb/1200_w/eyJhbGciOiJIUzI1NiJ9.eyJpbWciOiJfZWFlOTAxODU4YjQzNjNhNTU5OTFiN2Y2YjlhNDU5NTMifQ.5qpUalAMaD3q5yFSNNEPSSIKzs6oRYvM9_g56S24cWc-gif.gif',
      'https://thumb.gyazo.com/thumb/1200_w/eyJhbGciOiJIUzI1NiJ9.eyJpbWciOiJfODY4MmM2OGE5YzU4Y2Y1MWZlMDMwYTZlMmRiMWQ0MzUifQ.oOgo2RZ-CmH755e55k-NIHK9f-91ki2SMoUOlg-ffII-gif.gif'
    ] 
  },
  { 
    id: 6, 
    title: 'RPG Skills & Fireball', 
    // featured: true, // ADD THIS FLAG HERE
    description: 'RPG-style skill progression featuring shootable fireball projectiles, enemy spawner, skills, and exponential levelling system that grants skill points on level up.',
    media: [
      'https://thumb.gyazo.com/thumb/1200_w/eyJhbGciOiJIUzI1NiJ9.eyJpbWciOiJfYTMwMmQ4MTk1NjQ0ZDkyZmY1ZGU5ODVhZGQzYjFiMDMifQ.BQ_-w0YAm8r6U_zvAD_6h4wo7Fr_dfGSM9zma9zjqZE-gif.gif',
      'https://thumb.gyazo.com/thumb/1200_w/eyJhbGciOiJIUzI1NiJ9.eyJpbWciOiJfNTNkYzRmOTg1NWNmMWRkNGIxYTFiYjAyZTIzYzVmZmYifQ.IXgqn479EYPJFkTzsTBcOBcP7VjyEUDmXi1ngvkqnek-gif.gif',
      'https://thumb.gyazo.com/thumb/1200_w/eyJhbGciOiJIUzI1NiJ9.eyJpbWciOiJfMzNjZGRiZDcxNjgzODU0N2E2YzA4ZWRlMDhkZDY0ZGMifQ.m-i5dEe84UNs6bV5rlI3rtgIqPAznxT3MOn1Q4ayQoc-gif.gif',
      'https://thumb.gyazo.com/thumb/1200_w/eyJhbGciOiJIUzI1NiJ9.eyJpbWciOiJfNzU2NzFlOWJjZTQwNzZlMDdkODY5YjQyNmU5YzRkM2UifQ.reLGupzQDhodNcmb7OnjT9BGt6Ir_N_cADd3cxgtuok-gif.gif',
      'https://thumb.gyazo.com/thumb/1200_w/eyJhbGciOiJIUzI1NiJ9.eyJpbWciOiJfN2QyYTRmOGM2N2YwYTI3YWZkNzEzMzQxMWZiOTY4YzMifQ.vLYSgANyih6nNElPH54U1QBzrRETo9ZyxEKdAD-hGBg-gif.gif',
      'https://thumb.gyazo.com/thumb/1200_w/eyJhbGciOiJIUzI1NiJ9.eyJpbWciOiJfNTE1MTRmM2EyOTY2ODNkY2JkMzliNmQ1YmVkNDUxYWEifQ.7OX3u3J_RFu-mc9M5O7zIbLrAl80qmsEEiGQDHcwOt4-gif.gif'
    ] 
  },
  { 
    id: 8, 
    title: 'Vehicle Spawner', 
    description: 'Garage style system to view and spawn car, with validation to prevent spamming and car stacking..',
    media: [
      'https://thumb.gyazo.com/thumb/1200_w/eyJhbGciOiJIUzI1NiJ9.eyJpbWciOiJfNjJlZGVhZjU3YzZmMWQxZWQxNmE1MjU0ZDFkZThjNjkifQ.wKvr-dZ_aR1hPJ8qiIhV6kU852J1c7Grd-1KpGly4n8-gif.gif',
      'https://thumb.gyazo.com/thumb/1200_w/eyJhbGciOiJIUzI1NiJ9.eyJpbWciOiJfMWZkYWQ4ZDJjNjM1YWEyMDUwZTc1NTdlMzBhY2YxOTcifQ.d_OrjwmxRMovQmxNtFpo4DhpsUhbG2H8Ean36IvM01Q-gif.gif'
    ] 
  },
  { 
    id: 10, 
    title: 'Scavenger System', 
    
    // featured: true, // ADD THIS FLAG HERE
    description: 'Find all the secret items to open the door, along with a demo within the game itself.',
    media: [
      'https://thumb.gyazo.com/thumb/1200_w/eyJhbGciOiJIUzI1NiJ9.eyJpbWciOiJfMDc5NjI3ZTVkYTQxZTY4MGI0ZTU2YTVjN2ZlYmI5YjUifQ.NDSAqwIPPyCUnHpKtzcc3js8LFz7m_DFnr2dJsOnNdE-gif.gif',
      'https://thumb.gyazo.com/thumb/1200_w/eyJhbGciOiJIUzI1NiJ9.eyJpbWciOiJfNjRkMjA4MmEzZDE0MTFmZmQwNmJkNDlmYmNhMzZjOWIifQ.6wxik6dZP5S18OzkBj3FbXsxku0FySvgK7bbT8mlS1Q-gif.gif'
    ] 
  },
  { 
    id: 11, 
    title: 'Strafe Movement', 
    description: 'Modifications to the default roblox character controller scripts allowing for shift-to-lock type orientations, alongside Sprint, Slow, and Dash.',
    media: [
      'https://thumb.gyazo.com/thumb/1200_w/eyJhbGciOiJIUzI1NiJ9.eyJpbWciOiJfNDE2NDU5MzZkNjc5YzNlNzFmMmQyNGRiNTRlZjc4YWIifQ.206TFXDTOvsI-JUuW-vVwuZhDTddhZUDplF6DlRkQLY-gif.gif',
      'https://thumb.gyazo.com/thumb/1200_w/eyJhbGciOiJIUzI1NiJ9.eyJpbWciOiJfNjg5N2UwMGVjNzMyNDEwMGExODM4ZjBiMDExMGJiNmYifQ.nenHXOSngJPwVJhfC2PJch65PgQROIx0utkEoHOcyW4-gif.gif',
      'https://thumb.gyazo.com/thumb/1200_w/eyJhbGciOiJIUzI1NiJ9.eyJpbWciOiJfNjdkZTE3MGJiN2ZjZjhiMGVmMmFkNDRhOGEzNmE4NzYifQ.gcdTMJHcui0gfHUm_qWv1TLOdMrpDjotF95nF8DCIyE-gif.gif',
      'https://thumb.gyazo.com/thumb/1200_w/eyJhbGciOiJIUzI1NiJ9.eyJpbWciOiJfNTA2Y2ZjYzQ5ODU4NDkzOGFkZjNhMDA2NmEwNDVhMWUifQ.UtBF6raoDbvDlSTFVM4kG68gwfuollnpEeI4ukAvthw-gif.gif'
    ] 
  },
  { 
    id: 13, 
    title: 'Equipped Tool IK', 
    description: 'IK system for both players and NPC enemies to align their bodies with the position of the weapon without any custom animations.',
    media: [
      'https://thumb.gyazo.com/thumb/1200_w/eyJhbGciOiJIUzI1NiJ9.eyJpbWciOiJfMjQ5Y2UyNWMwOWJhYmEwNTVhYjAxNDIwMDMyYzI5NTYifQ.nFUqiEzil3DHjEDydCA9okYeZXDrBZuW7kBqk62Thh4-gif.gif',
      'https://thumb.gyazo.com/thumb/1200_w/eyJhbGciOiJIUzI1NiJ9.eyJpbWciOiJfZWExNjM3NDZkMmFhNmFkNzQ4NzQwYzMyYThmODM0MjkifQ.8GX3hq-SQrqbWF56ptQuWEb8lJu6OCt4trwwNFMeMkQ-gif.gif'
    ] 
  },
  { 
    id: 12, 
    title: 'Steering Wheel IK', 
    description: 'IK modifications to existing code binding the player limbs to the steering wheel.',
    media: [
      'https://thumb.gyazo.com/thumb/1200_w/eyJhbGciOiJIUzI1NiJ9.eyJpbWciOiJfNzczYjcwY2E2MWJhZjQzMzhiYTA2ODI3MGQyZjE4ODgifQ.SJJXs5eUbKcHlX-7aiO6fJZJLv7KYvhtWP9g5O3VqwY-gif.gif'
    ] 
  },
  { 
    id: 14, 
    title: 'Inventory System', 
    description: 'Grid-based item management supporting stack splitting, drag-and-drop UI logic, interaction with safes, and robust syncing with both server and Datastore.',
    media: [
      'https://thumb.gyazo.com/thumb/1200_w/eyJhbGciOiJIUzI1NiJ9.eyJpbWciOiJfNWM0NWE5NmFiMjE4NjVhMTgxNzJhNTkyYjk2ZmNjNmIifQ.QyUx6GDJ3OYzZxUUKVw5g-hjvKZ8sEmaCGY6L0yLuVU-gif.gif',
      'https://thumb.gyazo.com/thumb/1200_w/eyJhbGciOiJIUzI1NiJ9.eyJpbWciOiJfNGZiYTQ5ZDEyMmJiODdjNjdhM2RkZDNmM2ZhNWU5NDUifQ.p774gl6grwvPIRB9Ax7HIhoXN5sS64uPk4Drfs3xOuY-gif.gif',
      'https://thumb.gyazo.com/thumb/1200_w/eyJhbGciOiJIUzI1NiJ9.eyJpbWciOiJfOWUwMzVjZjhkNjM2M2Q1OTY4ODBmZmFjMzZmMGFkNWUifQ.4yrhnclgIUvC5tH0t8VVfQlhdzBVyE_p8_x9w_Y8ijo-gif.gif',
      'https://thumb.gyazo.com/thumb/1200_w/eyJhbGciOiJIUzI1NiJ9.eyJpbWciOiJfYmNjZGZlOTIyZDNkZTMyNDNmOGNlMzU4YzA2ODk3YzQifQ.ULvdVkC_Kob-wtw94wTHY_XgaDT4tZTEUTU-CW777KY-gif.gif',
      'https://thumb.gyazo.com/thumb/1200_w/eyJhbGciOiJIUzI1NiJ9.eyJpbWciOiJfOWFhNDk5YjkyZDlhYzRmMTViMGZhZmI2YmI3NGNhODkifQ.lzWR95C6EDMlluVAAnSTzA9Mb0BtLiUpZ7UzljdevMA-gif.gif',
      'https://thumb.gyazo.com/thumb/1200_w/eyJhbGciOiJIUzI1NiJ9.eyJpbWciOiJfMTJlMTE3MmY5MTNkZGI2NjFjOGY0MjAwYjRiNmQwNzUifQ.phQnksyhBtO1d9MnMeVSlxHzVruGxftV3oLvlK0tfBU-gif.gif',
      'https://thumb.gyazo.com/thumb/1200_w/eyJhbGciOiJIUzI1NiJ9.eyJpbWciOiJfYTYwMWE2OGRhZGQ4NmQ0NjJlMThiMDg0OGU0MDBiZTIifQ.6T_U1gLLpeRM_O8NXydjvCJuDK5tM0ta8vMqYyw_zFI-gif.gif'
    ] 
  },
  { 
    id: 15, 
    title: 'Pogo Legends UI', 
    description: 'A simple clip showing how my framework automatically applies global UI effects without having to duplicate code, improving performance and code organization.',
    media: [
      'https://thumb.gyazo.com/thumb/1200_w/eyJhbGciOiJIUzI1NiJ9.eyJpbWciOiJfNzQ3MGMwZDgxZjAwNDhiNDVkNTdmMGY0OTRmNWY3ZjUifQ.Z3aWM-mcMdq1RcTFXJj4ML1-lW_ekaJKYp4KzI5ILug-gif.gif'
    ] 
  },
  { 
    id: 17, 
    title: 'Parkour System', 
    description: 'This is a fluid, state-machine-based parkour movement system focused on preserving and generating maximum momentum, with moves like Sprint, Slide, Dash, Wall Rebound, Ground Slam, etc.',
    media: [
      'https://thumb.gyazo.com/thumb/1200_w/eyJhbGciOiJIUzI1NiJ9.eyJpbWciOiJfZTM5YTU1ZWNlMDZmZWFjMWM3NmI4MTk2MTVjNTE0YjkifQ.cf195_BI6WwW5QXvpPmmlFFYftmZYeHdPZaajE8txLA-gif.gif',
      'https://thumb.gyazo.com/thumb/1200_w/eyJhbGciOiJIUzI1NiJ9.eyJpbWciOiJfMjU3ZGE3Y2ZlMTUyMjY2OTQyNmVmYTM5ZmEzNzRjYTQifQ.8-Pjiq0aGwJ-1TV80o6o-IzWLZ5H7rjkvqKM-XI2Jho-gif.gif',
      'https://thumb.gyazo.com/thumb/1200_w/eyJhbGciOiJIUzI1NiJ9.eyJpbWciOiJfYThjODllMWIyYjYwOWM1YmFiZDk5ODcyNzBkMTMwYjQifQ.AQXGJmUvpouxsiwbUv9BUES6OLRmpBzQEnWacn25Y4Q-gif.gif'
    ] 
  },
  { 
    id: 18, 
    title: 'Football Animations', 
    description: 'Smoothly looped and transitioned football stunt animations including Juggle, Knee Hop The World (HTW), Touzani HTW, Crossover, Outside Around The World, and many more (12 in total).',
    media: [
      'https://thumb.gyazo.com/thumb/1200_w/eyJhbGciOiJIUzI1NiJ9.eyJpbWciOiJfNTA5ZjNhZGJlZmMxMTU2ODUyYWVhMzhiNzE3ODgxZTIifQ.lIsAzI2o7fqz--pobQ1ZilO_GVuhMz5Up4rFkMiigD8-gif.gif',
      'https://thumb.gyazo.com/thumb/1200_w/eyJhbGciOiJIUzI1NiJ9.eyJpbWciOiJfNzA5OWMwMTIxYjA1NTlkZTcyMzYxMTI0YjQ3MTU0MzkifQ.e8zSMirDu-TeA0gDQtnH7AXJW1uliC_lDMfOuP6T25Y-gif.gif',
      'https://thumb.gyazo.com/thumb/1200_w/eyJhbGciOiJIUzI1NiJ9.eyJpbWciOiJfYTZiOTY5ZmMyNWJhNDU4MTllYjZiYjM2MTlkZmQ1NTQifQ.nv8k5-S4gbKTGb8YZh7rSHCewVS6tK84pE0rl_IYeXA-gif.gif',
      'https://thumb.gyazo.com/thumb/1200_w/eyJhbGciOiJIUzI1NiJ9.eyJpbWciOiJfYTcyMDYzMmMzOGRkZDg2NTQ4YWU2ZDY2YmMyYjFlYWUifQ.DO42iiEI3BBkmUDiz-nw8g6kkSzyO4Zpbg7SPi6xAM4-gif.gif',
      'https://thumb.gyazo.com/thumb/1200_w/eyJhbGciOiJIUzI1NiJ9.eyJpbWciOiJfZDJkZDM0Y2Y4MDE1Y2M1YWZlYjY2M2NjYjMyN2QzZmEifQ.nxzOOiuzC-fSRo8yBNKY_2sz22gJo8iWnxkm1RWoQhQ-gif.gif',
      'https://thumb.gyazo.com/thumb/1200_w/eyJhbGciOiJIUzI1NiJ9.eyJpbWciOiJfMWNjY2I5ZjhkYjQwY2VlYTE4YTg0NzI0OTEzNzc2MjkifQ.NRDJ4jI72ZoOjfsz8WO74eb237wXLe8REb2zcmHvJdU-gif.gif'
    ] 
  },
  { 
    id: 19, 
    title: 'Football System', 
    description: 'The system implementing the aforementioned football stunts, with possession tracking and mobile support, with default controls and UI overridden.',
    media: [
      'https://thumb.gyazo.com/thumb/1200_w/eyJhbGciOiJIUzI1NiJ9.eyJpbWciOiJfZTY5ZGQ4MjExY2Y1ZWEzNjgwOTY5N2E0NzBiMzA0ZWUifQ.G9R6WRqly3S8G9LiEGNBxS3cX-g450CHjnsEg-lGtOg-gif.gif',
      'https://thumb.gyazo.com/thumb/1200_w/eyJhbGciOiJIUzI1NiJ9.eyJpbWciOiJfYTZiNDk4OTdkZjYyODVjNDM3ODg4N2VhNTRlOWQ0NTcifQ.IVypFses8ISqpbt04EM8IZRKUecbVc6Nkq-S2IEZLVk-gif.gif',
      'https://thumb.gyazo.com/thumb/1200_w/eyJhbGciOiJIUzI1NiJ9.eyJpbWciOiJfY2Q5NDQ4ZTE5MGE3MGY2M2FlOTA0Mzc3NGU1MGM0M2QifQ.wM3n-am1WYcTeadXh-LxCjkvraxVesA7BEhVv9dFRpc-gif.gif'
    ] 
  },
  { 
    id: 20, 
    title: 'Radar Graph UI', 
    description: 'A simple interface for a Radar Graph UI requested for displaying different sports skills, with a quick randomizer input button for the demo.',
    media: [
      'https://thumb.gyazo.com/thumb/1200_w/eyJhbGciOiJIUzI1NiJ9.eyJpbWciOiJfNmZiMWM4MGY2YmNlOWQxY2MzYWRkZjMzNGY1MzJkY2IifQ.U2wHnb1OvIYDRzWfwLi7O1hYFoVnpoKv28x6OSnMiFU-gif.gif',
      'https://thumb.gyazo.com/thumb/1200_w/eyJhbGciOiJIUzI1NiJ9.eyJpbWciOiJfMGEzNzNlNzhlMTc0MThlODJlMTEwMjIxZmJkMjYzZWUifQ.99qv3lE58hrXMQUsZRAoz56UXDKvn_lZfobiYGU7UaY-gif.gif'
    ] 
  },
  { 
    id: 21, 
    title: 'Pogo Jump Mechanics', 
    description: 'A custom physics-based character controller for my own game, featuring double jumps, hovering, and skill-based timer for the launch.',
    media: [
      'https://thumb.gyazo.com/thumb/1200_w/eyJhbGciOiJIUzI1NiJ9.eyJpbWciOiJfOWFhNTE5ZjRlNzJhMjFhMjVlZWI5NzJjZDJkZTFkODMifQ.95TRhN85YGA2Z52bRzB4TO71iq80eC65vCB5jqDwTVA-gif.gif',
      'https://thumb.gyazo.com/thumb/1200_w/eyJhbGciOiJIUzI1NiJ9.eyJpbWciOiJfN2IyN2UzZDcxMzUwMjdmOWNlMmU5NzY4ZmE3YzAwOGUifQ.Zdr8Vbu2ybE4YYk3fCRx0-FW6tK2E6BUSHfmI6nXy6k-gif.gif',
      'https://thumb.gyazo.com/thumb/1200_w/eyJhbGciOiJIUzI1NiJ9.eyJpbWciOiJfYWRhMjQzNTdlNjVlY2JiNzBlYzEyOTkyY2ExZjE0NDAifQ.XoVL3vB-mY6r8TdcQLONf7ilWm86g1llhLRH7mB1Mk4-gif.gif'
    ] 
  },
  { 
    id: 22, 
    title: 'Egg Hatching Sequence', 
    description: 'Simulator style pet hatching animation, with an extensive tweening sequence, and supporting 1, 3, 6, and 9 pets, like for gamepasses.',
    media: [
      'https://thumb.gyazo.com/thumb/1200_w/eyJhbGciOiJIUzI1NiJ9.eyJpbWciOiJfMmRmOTc1ZjhiMzBjMzQ4NGZlYjhmOTM5ZGM3YjE1NTgifQ.sZnPv6sFl7kNJ67NmZBTot03FZJ50NsKaxbMqZuKG2s-gif.gif',
      'https://thumb.gyazo.com/thumb/1200_w/eyJhbGciOiJIUzI1NiJ9.eyJpbWciOiJfZTgyOWU4ZjRhMGVmZWFkYzZmYzAxY2JkZGFmNWNjMWIifQ.a5-YrVoT4uB2IVtlpjjRogyHS_eiKyt-LSmyJbJP_mo-gif.gif',
      'https://thumb.gyazo.com/thumb/1200_w/eyJhbGciOiJIUzI1NiJ9.eyJpbWciOiJfN2ZhMzZkZjg0ZDZiNDIxYjc2NjQ1YjZlOWM5NWQ2YTEifQ.Gx_obmy7xCKEhhG6RcBSFMhsCDpXmtoD1ldjv0TiMNI-gif.gif',
      'https://thumb.gyazo.com/thumb/1200_w/eyJhbGciOiJIUzI1NiJ9.eyJpbWciOiJfNDJlMGMxMTU4MjczMDMzNWVjNTE4MjRmOTU0MGNiYWIifQ.JxNDxFam9v1E2C1skIQ258PpIyN0j11Y1vhpJqUroCo-gif.gif'
    ] 
  },
  { 
    id: 7, 
    title: 'Robux Shop System', 
    description: 'A clean store system integrated with a pre-provided UI, featuring 2 currencies (Coins and Robux) to purchase and equip different nametags, trails, gamepasses, and developer products.',
    media: [
      'https://thumb.gyazo.com/thumb/1200_w/eyJhbGciOiJIUzI1NiJ9.eyJpbWciOiJfMzFkZDAyZThkN2JhMTgyNmQ1NGMxMjQ4ZWI2YTQ3Y2YifQ.ycip8HFmfVtGQEp9GSx1S2N0hjeON-mHQ_3wE8UV4uw-gif.gif',
      'https://thumb.gyazo.com/thumb/1200_w/eyJhbGciOiJIUzI1NiJ9.eyJpbWciOiJfZGEzNThmZGQ5OTY4ZDVhNDM4MWUxZmQ0MmFlNDJmZDMifQ.j_P20_kD7HaPcjU8Ox0w3kP9s24HI-e9L9ZRz_22J2o-gif.gif',
      'https://thumb.gyazo.com/thumb/1200_w/eyJhbGciOiJIUzI1NiJ9.eyJpbWciOiJfYzkyMmYzODAyOTQwMWUyMmE2MzU5NGFkMjU2MjIwYjUifQ.DZX5bJ3wLai25M9rkypButFjY2WgZdJffVVHBeKVZac-gif.gif',
      'https://thumb.gyazo.com/thumb/1200_w/eyJhbGciOiJIUzI1NiJ9.eyJpbWciOiJfNTJlZGFlYjlmNmIyN2MyZmM5MWY4MDAyM2ZhOTYwMWMifQ.xTVNWuaYAc-v_zjuckZa7NGUHa2qweYESRzOTK2D9xY-gif.gif'
    ] 
  },
  { 
    id: 23, 
    title: 'Loading Screen & Main Menu', 
    description: 'A ReplicatedFirst skippable loading screen with multiple banner images, tips, and built-in tracking of game loading progress, taking the user to a main menu with pannable camera, more UI effects, and final transition screen.',
    media: [
      'https://thumb.gyazo.com/thumb/1200_w/eyJhbGciOiJIUzI1NiJ9.eyJpbWciOiJfYWMzYmZjMmJiNjljZTUwNmNmNDJiZjBiNzhkMmI3MTYifQ.kWpIibqfxGdSxf3iLAErgFnbFuCIai1uSdjVb85ylFk-gif.gif',
      'https://thumb.gyazo.com/thumb/1200_w/eyJhbGciOiJIUzI1NiJ9.eyJpbWciOiJfN2RlMDU0ZGRlOGE1MjRkZWVkMjNkOWZhNDFlYWJlZTEifQ.HrULg2p-z7_PSgIFn0O0XABylir3tIt1eO1-3llucBE-gif.gif',
      'https://thumb.gyazo.com/thumb/1200_w/eyJhbGciOiJIUzI1NiJ9.eyJpbWciOiJfM2U4OGIwMGRjMjdhNmE0YzQyMmY2N2FhMjU4NDJkMDEifQ.Vznb5UYc8AEf8MkdLjyzbmQ62tkeXzXNMofuAmhEggU-gif.gif',
      'https://thumb.gyazo.com/thumb/1200_w/eyJhbGciOiJIUzI1NiJ9.eyJpbWciOiJfNjA0MDk1MGEyODY1YWU0ZTJiYzQyZmVjYTNjMzI4NTgifQ.j4n3g11IoCvFMptXjPkPGyxHUuU_KLRhDuhEyLnWCsE-gif.gif',
      'https://thumb.gyazo.com/thumb/1200_w/eyJhbGciOiJIUzI1NiJ9.eyJpbWciOiJfZmY1ZDkxOWE2YWQxZjY3OTU0MGI1MDRiMTFlY2M4NDUifQ.iweAhFxmK_oMmx3df0Eun-fiT4UV0NWf3toj53XGqkw-gif.gif'
    ] 
  }
];


const Portfolio = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const featuredItems = portfolioData.filter(item => item.featured);
  const remainingItems = portfolioData.filter(item => !item.featured);
  console.log(featuredItems.length);

  return (
    <section className="page-section portfolio bg-dark text-white" id="portfolio">
      
      {/* --- FEATURED WORK ZONE (Conditionally Rendered) --- */}
      {featuredItems.length > 0 && (
        <div className="container-fluid px-2 px-lg-5 mb-4">
          <h2 className="page-section-heading text-center text-uppercase text-white mb-0">Featured</h2>
          <Divider light={true} />
          
          <div className="mt-4">
            {featuredItems.map((item, index) => (
              <FeaturedItem 
                key={item.id} 
                item={item} 
                imageRight={index % 2 !== 0} 
              />
            ))}
          </div>
        </div>
      )}

      {/* --- MORE WORK / PORTFOLIO GRID --- */}
      {/* If there are no featured items, we drop the mt-5 pt-5 so there isn't a massive awkward gap */}
      <div className={`container-fluid px-1 ${featuredItems.length > 0 ? 'mt-5 pt-5' : ''}`}>
        <h2 className="page-section-heading text-center text-uppercase text-white mb-0">
          {featuredItems.length > 0 ? 'More Work' : 'Portfolio'}
        </h2>
        <Divider light={true} />
        
        <div className="row g-1 mt-4">
          {remainingItems.map((item) => (
            <PortfolioItem key={item.id} item={item} onSelect={() => setSelectedItem(item)} />
          ))}
        </div>
      </div>
      
      <PortfolioModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </section>
  );
};

export default Portfolio;