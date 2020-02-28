const yulp = require('./index');
const source = yulp.compile(`
  // hello

  code {
    mslice(3, 3)
  }

  code {
    mstruct K (cool: 2)

    K.cool(333)

    K.cool.size()

    K.offset(2)
  }
  /*
  code cooldfskjkdsfjk
  @!#$#@%%$
  */
  code {
    // no?
    /*
    yes?
    code {

    }
    */

    mstruct BlockHeader (
      blockProducer: 32,
      previousBlockHash: 32,
      blockHeight: 32,
      ethereumBlockNumber: 32,
      transactionRoots.length: 32
    )

    BlockHeader.blockProducer(400)
    BlockHeader.blockProducer.size() // 32

    BlockHeader.blockHeight(400) // will return block height
    BlockHeader.blockHeight.offset(400) // will return pos + length
    BlockHeader.blockHeight.position(400) // will return pos
    BlockHeader.blockHeight.size() // 32
    BlockHeader.blockHeight.index() // 2

    BlockHeader.size(400) // return entire struct size
    BlockHeader.offset(400) // will produce offset

    enum Colors (
      Red,
      Blue,
      Green
    )

    const nick, cool := 0x1

    const hello_ := topic"event Cool()"

    ni_ck2, cool2 := sig"function name()"

    what := Colors.Blue

    function selectAndVerifyInputDeposit(input, witnessesLength) -> length,
      depositHashID, witnessReference {
        const insideMethod := mslice(0, 23)

        mstruct Jonny (
          cool: 32,
          yes: 11
        )

        const hello3 := Jonny.yes(122)

        enum Enclosed (
          Cool,
          Beans
        )

        let dfsfds := Enclosed.Beans
    }

    gh(Enclosed.Beans)

    for {} eq(1, false) {} {
      // hello
    }

    function /* dffds */ nick() {

    }
  }
  `);

console.log(yulp.print(source.results));
