// Youtubeから取得したSubtitleデータを{ index: , time: , seconds: , text:  }のオブジェクト形式に変換する

const convertSubtitle = (input: string) => {
  // Step1, inputデータを行ごとに区切って配列データに変換する
  const lines = input.trim().split("\n");
  // 以下の結果になる。--------------------------------------
  // console.log(lines);
  // [
  //   '0:04',
  //   'The childcare system in the UK is broken.',
  //   '0:07',
  //   'Nurseries cost a fortune for parents,',
  //   '0:09',
  //   'but many can barely afford to stay open.',
  //   ...
  // ]
  // ------------------------------------------------------

  // Step2, 改行したい行のあとに（\n）を入れる
  // （n行目の文末が「.、?、"」であればlistにpushしたあとに改行（\n）を入れる。）

  const list: string[] = [];
  lines.map((n) => {
    if (n.slice(-1) === "." || n.slice(-1) === "?" || n.slice(-1) === '"') {
      list.push(n);
      list.push("\n");
    } else {
      list.push(n);
    }
  });
  // 以下の結果になる。---------------------------------------
  // console.log(list);
  // [
  //   '0:04',
  //   'The childcare system in the UK is broken.',
  //   '\n',
  //   '0:07',
  //   'Nurseries cost a fortune for parents,',
  //   '0:09',
  //   'but many can barely afford to stay open.',
  //   '\n',
  //   ...
  // ]
  // ------------------------------------------------------

  // Step3, 不要な時刻表記を消去する
  // （nが時刻表期であり、n-1が"\n"でない、かつnがlistの最初の要素でない場合はnを消去）

  list.map((n, index, list) => {
    if (index === 0) {
      return;
    }
    if (n.slice(1, 2) === ":" || n.slice(2, 3) === ":") {
      if (list[index - 1] !== "\n") {
        delete list[index];
      }
    }
  });
  // 以下の結果になる。deleteされた箇所はempty-itemとなる。----------
  // console.log(list);
  // [
  //   <1 empty item>,
  //   'The childcare system in the UK is broken.',
  //   '\n',
  //   '0:07',
  //   'Nurseries cost a fortune for parents,',
  //   <1 empty item>,
  //   'but many can barely afford to stay open.',
  //   '\n',
  //   '0:11',
  //   ...
  // ]
  // ---------------------------------------------------------

  const list_a = list.filter(Boolean); // filter(Boolean)でempty-itemを消去。

  // Step4, \n行を区切りにして、list_bにデータを格納していく。
  const list_b = [];
  let currentSegment = [];
  for (const item of list_a) {
    if (item.trim() === "") {
      // "\n"はitem.trim() === ""となる
      if (currentSegment.length > 0) {
        list_b.push(currentSegment);
        currentSegment = [];
      }
    } else {
      currentSegment.push(item);
    }
  }
  if (currentSegment.length > 0) {
    list_b.push(currentSegment); // 最後のセグメントを追加
  }
  // 以下の結果になる--------------------------------------------
  // console.log(list_b);
  // [
  //   [ '0:04', 'The childcare system in the UK is broken.' ],
  //   [
  //     '0:07',
  //     'Nurseries cost a fortune for parents,',
  //     'but many can barely afford to stay open.'
  //   ],
  //   [
  //     '0:11',
  //     "It's about affordable childcare, it's about accessible childcare."
  //   ],
  // ]
  // -----------------------------------------------------------

  // Step5, 時間形式を秒形式に変換する

  const subtitleData = list_b.map((n, index) => {
    let seconds = [];
    if (n[0].length === 4) {
      const n_1 = Number(n[0].slice(0, 1));
      const n_2 = Number(n[0].slice(-2));
      const n_seconds = n_1 * 60 + n_2;
      seconds.push(n_seconds);
    } else if (n[0].length === 5) {
      const n_1 = Number(n[0].slice(0, 2));
      const n_2 = Number(n[0].slice(-2));
      const n_seconds = n_1 * 60 + n_2;
      seconds.push(n_seconds);
    }

    //Step6, { index: , time: , seconds: , text:  }のオブジェクト形式にする。
    if (n[0].slice(1, 2) === ":" || n[0].slice(2, 3) === ":") {
      return {
        index: index,
        time: n[0],
        seconds: seconds[0],
        text: n.slice(1).join(""),
      };
      seconds = [];
    } else {
      return { index: index, time: "", text: n.join("") };
      seconds = [];
    }
  });
  // 以下の結果になる----------------------------------------------------------
  // console.log(c);
  // [
  // {"index":0,"time":"0:04","seconds":4,"text":"The childcare system in the UK is broken."},
  // {"index":1,"time":"0:07","seconds":7,"text":"Nurseries cost a fortune for parents,but many can barely afford to stay open."},
  // {"index":2,"time":"0:11","seconds":11,"text":"It's about affordable childcare, it's about accessible childcare."},
  // ]
  // -------------------------------------------------------------------------

  return subtitleData;
};

export default convertSubtitle;
