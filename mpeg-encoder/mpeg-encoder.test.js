let mpegEncoder = require('../mpeg-encoder')

window.importScripts = () => true
window.lamejs = require('lamejs')

let messages
beforeEach(() => {
  messages = []
  global.postMessage = msg => {
    let from = new Uint8Array(msg)
    let array = []
    for (let i of from) {
      array.push(i)
    }
    messages.push(array)
  }
  global.onmessage = undefined
  mpegEncoder()
})

it('encodes data to MPEG', () => {
  onmessage({ data: ['init'] })
  onmessage({ data: ['encode', [0.5]] })
  onmessage({ data: ['encode', [2]] })
  onmessage({ data: ['encode', [-3]] })
  expect(messages).toEqual([])

  onmessage({ data: ['dump', 44100] })
  expect(messages).toEqual([
    [
      255,
      251,
      144,
      196,
      0,
      0,
      21,
      242,
      11,
      96,
      128,
      140,
      211,
      194,
      200,
      188,
      108,
      116,
      51,
      27,
      113,
      78,
      107,
      25,
      0,
      0,
      0,
      64,
      172,
      165,
      0,
      36,
      7,
      24,
      198,
      49,
      141,
      209,
      17,
      17,
      17,
      17,
      221,
      221,
      221,
      221,
      209,
      17,
      17,
      17,
      17,
      221,
      221,
      221,
      221,
      209,
      17,
      17,
      17,
      17,
      221,
      221,
      221,
      221,
      209,
      17,
      17,
      19,
      255,
      255,
      243,
      253,
      221,
      221,
      209,
      17,
      17,
      17,
      4,
      1,
      129,
      147,
      38,
      76,
      153,
      50,
      100,
      200,
      16,
      32,
      64,
      129,
      2,
      4,
      8,
      19,
      38,
      76,
      153,
      50,
      100,
      201,
      147,
      8,
      32,
      64,
      129,
      0,
      64,
      0,
      0,
      32,
      6,
      3,
      1,
      128,
      192,
      96,
      48,
      25,
      50,
      97,
      4,
      8,
      16,
      32,
      64,
      129,
      2,
      4,
      201,
      147,
      38,
      76,
      153,
      50,
      100,
      200,
      16,
      32,
      64,
      129,
      2,
      4,
      16,
      78,
      238,
      238,
      238,
      238,
      34,
      34,
      35,
      255,
      255,
      255,
      196,
      69,
      221,
      221,
      221,
      158,
      153,
      2,
      4,
      8,
      16,
      32,
      64,
      129,
      2,
      100,
      201,
      147,
      38,
      76,
      153,
      50,
      97,
      4,
      8,
      16,
      4,
      0,
      0,
      0,
      1,
      0,
      48,
      24,
      12,
      6,
      3,
      1,
      133,
      147,
      216,
      146,
      72,
      146,
      147,
      204,
      0,
      1,
      21,
      85,
      85,
      85,
      85,
      153,
      153,
      153,
      153,
      149,
      85,
      85,
      85,
      85,
      153,
      153,
      153,
      155,
      213,
      85,
      125,
      153,
      85,
      85,
      85,
      84,
      40,
      106,
      170,
      170,
      170,
      169,
      153,
      153,
      153,
      153,
      170,
      170,
      170,
      163,
      137,
      26,
      68,
      137,
      18,
      36,
      72,
      145,
      34,
      72,
      145,
      34,
      68,
      137,
      18,
      36,
      72,
      137,
      18,
      36,
      72,
      145,
      34,
      68,
      137,
      34,
      68,
      137,
      18,
      36,
      72,
      145,
      35,
      72,
      145,
      34,
      68,
      137,
      20,
      77,
      170,
      170,
      170,
      170,
      169,
      153,
      153,
      153,
      153,
      170,
      170,
      175,
      255,
      255,
      255,
      85,
      85,
      51,
      51,
      50,
      68,
      137,
      26,
      170,
      162,
      68,
      137,
      18,
      36,
      68,
      137,
      18,
      36,
      72,
      145,
      34,
      68,
      145,
      34,
      68,
      137,
      18,
      36,
      72,
      24,
      137,
      18,
      36,
      72,
      145,
      34,
      68,
      20,
      145,
      34,
      68,
      137,
      18,
      36,
      72,
      24,
      137,
      18,
      36,
      72,
      145,
      34,
      68,
      137,
      34,
      68,
      137,
      18,
      36,
      72,
      145,
      34,
      36,
      72,
      145,
      34,
      68,
      136,
      40,
      80,
      80,
      80,
      80,
      72,
      40,
      42,
      98,
      10,
      106,
      40,
      24,
      0,
      72,
      64,
      0,
      32,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      255,
      251,
      146,
      196,
      0,
      3,
      192,
      0,
      1,
      164,
      0,
      0,
      0,
      32,
      0,
      0,
      52,
      128,
      0,
      0,
      4,
      76,
      65,
      77,
      69,
      3,
      0,
      9,
      8,
      0,
      4,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ]
  ])
})

it('allow to call dump multiple times', () => {
  onmessage({ data: ['init', 44100] })
  onmessage({ data: ['encode', [0.5]] })
  onmessage({ data: ['encode', [2]] })
  onmessage({ data: ['dump', 44100] })
  expect(messages[0]).toHaveLength(835)

  onmessage({ data: ['encode', [0.5]] })
  onmessage({ data: ['dump', 44100] })
  expect(messages[1]).toHaveLength(836)

  onmessage({ data: ['dump', 44100] })
  expect(messages[2]).toHaveLength(0)
})

it('encodes using the sample rate provided by initialize', () => {
  onmessage({ data: ['init', 16000] })
  onmessage({ data: ['encode', [0.5]] })
  onmessage({ data: ['encode', [2]] })
  onmessage({ data: ['encode', [-3]] })
  expect(messages).toEqual([])

  onmessage({ data: ['dump', 44100] })
  expect(messages).toEqual([
    [
      255,
      243,
      200,
      196,
      0,
      125,
      156,
      110,
      108,
      0,
      198,
      51,
      52,
      93,
      140,
      225,
      200,
      127,
      33,
      200,
      197,
      39,
      43,
      202,
      35,
      17,
      135,
      241,
      216,
      114,
      25,
      194,
      236,
      88,
      137,
      142,
      152,
      233,
      142,
      138,
      232,
      174,
      128,
      114,
      239,
      151,
      44,
      182,
      224,
      96,
      22,
      64,
      178,
      5,
      144,
      48,
      0,
      192,
      3,
      16,
      140,
      66,
      50,
      0,
      210,
      83,
      41,
      204,
      231,
      51,
      156,
      206,
      115,
      74,
      77,
      41,
      52,
      164,
      210,
      83,
      98,
      141,
      74,
      53,
      40,
      212,
      163,
      83,
      13,
      140,
      54,
      48,
      212,
      163,
      81,
      141,
      235,
      54,
      180,
      218,
      211,
      107,
      77,
      173,
      54,
      180,
      218,
      211,
      90,
      205,
      101,
      55,
      40,
      212,
      163,
      82,
      141,
      74,
      53,
      40,
      212,
      163,
      66,
      12,
      198,
      50,
      0,
      210,
      83,
      41,
      76,
      167,
      51,
      148,
      202,
      83,
      40,
      204,
      97,
      44,
      153,
      113,
      203,
      104,
      91,
      2,
      210,
      22,
      144,
      185,
      8,
      4,
      72,
      133,
      136,
      226,
      59,
      238,
      219,
      150,
      229,
      195,
      243,
      243,
      13,
      97,
      118,
      38,
      58,
      99,
      170,
      117,
      3,
      72,
      116,
      37,
      150,
      204,
      2,
      19,
      24,
      77,
      4,
      50,
      16,
      200,
      67,
      33,
      12,
      198,
      52,
      32,
      212,
      195,
      116,
      14,
      76,
      60,
      212,
      235,
      83,
      77,
      51,
      85,
      83,
      85,
      83,
      93,
      115,
      101,
      179,
      109,
      211,
      125,
      147,
      146,
      3,
      130,
      3,
      121,
      227,
      130,
      3,
      130,
      3,
      138,
      35,
      138,
      67,
      146,
      99,
      162,
      3,
      190,
      147,
      166,
      147,
      166,
      147,
      166,
      147,
      174,
      179,
      174,
      179,
      174,
      211,
      182,
      211,
      190,
      83,
      218,
      227,
      186,
      227,
      186,
      227,
      186,
      227,
      186,
      227,
      187,
      3,
      195,
      3,
      195,
      3,
      194,
      99,
      231,
      19,
      199,
      19,
      199,
      19,
      199,
      19,
      199,
      19,
      199,
      19,
      199,
      19,
      198,
      243,
      190,
      115,
      218,
      227,
      186,
      227,
      186,
      227,
      186,
      227,
      186,
      227,
      186,
      227,
      178,
      195,
      170,
      163,
      162,
      3,
      190,
      147,
      166,
      147,
      166,
      147,
      166,
      147,
      166,
      147,
      158,
      115,
      158,
      83,
      142,
      19,
      133,
      147,
      145,
      227,
      121,
      227,
      121,
      227,
      121,
      227,
      121,
      195,
      113,
      163,
      105,
      131,
      89,
      67,
      72,
      163,
      84,
      243,
      61,
      19,
      69,
      19,
      69,
      19,
      60,
      243,
      52,
      179,
      36,
      115,
      20,
      18,
      209,
      150,
      128,
      182,
      5,
      164,
      45,
      33,
      120,
      16,
      113,
      98,
      69,
      37,
      110,
      67,
      184,
      254,
      59,
      13,
      97,
      97,
      16,
      144,
      89,
      67,
      8,
      3,
      36,
      83,
      20,
      83,
      20,
      83,
      20,
      83,
      28,
      115,
      36,
      179,
      52,
      243,
      69,
      51,
      85,
      19,
      113,
      131,
      97,
      99,
      89,
      99,
      89,
      131,
      97,
      131,
      105,
      163,
      113,
      227,
      130,
      35,
      145,
      195,
      182,
      115,
      158,
      83,
      150,
      83,
      150,
      83,
      158,
      115,
      158,
      147,
      166,
      179,
      174,
      211,
      190,
      115,
      218,
      227,
      186,
      227,
      186,
      227,
      186,
      227,
      195,
      3,
      195,
      3,
      195,
      35,
      203,
      35,
      210,
      163,
      247,
      83,
      215,
      83,
      215,
      83,
      215,
      83,
      215,
      83,
      215,
      83,
      215,
      83,
      215,
      83,
      222,
      211,
      243,
      67,
      211,
      99,
      211,
      67,
      211,
      67,
      211,
      67,
      211,
      67,
      211,
      67,
      203,
      35,
      202,
      131,
      231,
      19,
      207,
      51,
      207,
      51,
      207,
      51,
      199,
      19,
      198,
      243,
      182,
      147,
      133,
      112,
      226,
      211,
      221,
      20,
      221,
      123,
      233,
      136,
      41,
      168,
      160,
      96,
      1,
      33,
      0,
      0,
      128,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      255,
      243,
      200,
      196,
      0,
      122,
      228,
      110,
      112,
      32,
      198,
      113,
      180,
      12,
      69,
      172,
      176,
      213,
      218,
      187,
      87,
      106,
      165,
      84,
      170,
      2,
      176,
      202,
      153,
      49,
      147,
      25,
      49,
      147,
      25,
      49,
      147,
      25,
      64,
      148,
      5,
      49,
      83,
      21,
      49,
      83,
      21,
      49,
      85,
      42,
      197,
      88,
      86,
      28,
      187,
      151,
      114,
      238,
      93,
      204,
      73,
      175,
      59,
      207,
      244,
      102,
      51,
      25,
      140,
      198,
      105,
      110,
      67,
      77,
      105,
      172,
      179,
      150,
      114,
      228,
      179,
      150,
      26,
      176,
      169,
      138,
      132,
      148,
      78,
      64,
      50,
      1,
      144,
      12,
      93,
      226,
      217,
      22,
      152,
      2,
      3,
      9,
      0,
      3,
      49,
      12,
      196,
      51,
      17,
      76,
      133,
      50,
      28,
      204,
      147,
      66,
      77,
      79,
      51,
      176,
      218,
      195,
      107,
      13,
      172,
      54,
      184,
      222,
      227,
      124,
      14,
      48,
      57,
      224,
      221,
      83,
      165,
      78,
      149,
      53,
      21,
      53,
      21,
      53,
      23,
      53,
      151,
      53,
      151,
      54,
      29,
      52,
      216,
      54,
      88,
      54,
      88,
      54,
      90,
      54,
      218,
      54,
      218,
      54,
      218,
      54,
      218,
      54,
      224,
      53,
      27,
      55,
      29,
      55,
      29,
      55,
      29,
      55,
      29,
      55,
      29,
      55,
      27,
      54,
      155,
      54,
      161,
      53,
      90,
      54,
      218,
      54,
      218,
      54,
      218,
      54,
      218,
      54,
      218,
      54,
      216,
      54,
      88,
      53,
      220,
      52,
      23,
      53,
      151,
      53,
      153,
      53,
      151,
      53,
      151,
      53,
      149,
      53,
      21,
      52,
      145,
      52,
      21,
      50,
      206,
      51,
      208,
      52,
      80,
      52,
      80,
      51,
      206,
      51,
      204,
      51,
      74,
      50,
      70,
      49,
      70,
      48,
      5,
      49,
      5,
      49,
      5,
      49,
      5,
      48,
      131,
      48,
      129,
      44,
      201,
      120,
      81,
      85,
      97,
      147,
      25,
      49,
      147,
      25,
      83,
      49,
      39,
      234,
      187,
      130,
      214,
      153,
      211,
      148,
      214,
      152,
      114,
      166,
      68,
      226,
      217,
      0,
      68,
      0,
      6,
      97,
      2,
      96,
      2,
      96,
      6,
      97,
      6,
      98,
      14,
      99,
      18,
      101,
      26,
      103,
      42,
      102,
      160,
      104,
      160,
      104,
      160,
      104,
      160,
      105,
      164,
      105,
      168,
      106,
      172,
      108,
      180,
      109,
      196,
      107,
      58,
      110,
      58,
      110,
      58,
      110,
      58,
      110,
      62,
      111,
      62,
      112,
      66,
      113,
      70,
      114,
      86,
      111,
      204,
      115,
      204,
      115,
      200,
      114,
      204,
      115,
      204,
      115,
      204,
      115,
      208,
      116,
      208,
      117,
      224,
      113,
      86,
      117,
      86,
      117,
      86,
      117,
      86,
      117,
      86,
      117,
      86,
      117,
      86,
      118,
      86,
      117,
      102,
      114,
      216,
      118,
      216,
      118,
      216,
      118,
      216,
      118,
      216,
      118,
      216,
      117,
      212,
      117,
      212,
      117,
      224,
      112,
      86,
      117,
      86,
      117,
      86,
      117,
      86,
      116,
      82,
      116,
      82,
      116,
      78,
      115,
      74,
      114,
      86,
      110,
      196,
      114,
      200,
      114,
      200,
      114,
      196,
      113,
      196,
      113,
      192,
      112,
      188,
      125,
      225,
      239,
      199,
      44,
      158,
      50,
      122,
      217,
      227,
      39,
      139,
      157,
      174,
      116,
      153,
      193,
      230,
      199,
      153,
      212,
      107,
      81,
      173,
      70,
      181,
      26,
      208,
      105,
      49,
      148,
      64,
      97,
      23,
      41,
      19,
      80,
      10,
      128,
      84,
      29,
      72,
      149,
      74,
      215,
      103,
      31,
      102,
      178,
      215,
      92,
      150,
      178,
      195,
      84,
      5,
      9,
      37,
      149,
      48,
      28,
      194,
      67,
      41,
      12,
      98,
      49,
      144,
      202,
      99,
      58,
      13,
      110,
      57,
      216,
      243,
      163,
      65,
      81,
      198,
      43,
      196,
      196,
      20,
      212,
      80,
      48,
      0,
      144,
      128,
      0,
      64,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      255,
      243,
      200,
      196,
      0,
      0,
      0,
      3,
      72,
      0,
      0,
      0,
      0,
      76,
      65,
      77,
      69,
      3,
      0,
      9,
      8,
      0,
      4,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ]
  ])
})
