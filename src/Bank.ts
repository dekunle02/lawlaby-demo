interface BaseQuestion {
  id: number;
  body: string;
}

export interface Option {
  body: string;
  isCorrect?: boolean;
}

export interface Question {
  id: number;
  parentId?: number;
  parent?: BaseQuestion;
  body: string;
  options: Option[];
}

const BaseQuestions: BaseQuestion[] = [
  {
    id: 1,
    body: `Elder Bakori is the owner of a property situate at No 60, Usman Dan-Fodio Avenue Gwarinpa Abuja. Paul has agreed to rent the property for a period of 3 years.`,
  },
  {
    id: 2,
    body: `Ogene Johnson a Benin man left a will, in that will, to his youngest son he gave N2,000,000 to be drawn from his Union Bank Account Benin Branch and gave the family house to his youngest daughter Omore.
 Answer question below from the above scenario.`,
  },
  {
    id: 3,
    body: `Mr. Rich-Boy MoneyMan is a prominent Politian who own properties in Jos, Enugu, Lagos, Portharcourt, Dubai, America and Abuja. He intends to sell one of his properties located at Plot 223 Ministers Hill, Maitama Abuja to Mrs. Rose.`,
  },
];

const Questions: Question[] = [
  // {
  //   id: 1,
  //   parentId: 1,
  //   body: `Ideally who should prepare the document in respect of the transaction`,
  //   options: [
  //     { body: "Paul’s lawyer", isCorrect: false },
  //     { body: "Elder Bakori's lawyer", isCorrect: true },
  //     { body: "The Estate Agent", isCorrect: false },
  //     { body: "None of the above", isCorrect: false },
  //   ],
  // },
  // {
  //   id: 2,
  //   parentId: 1,
  //   body: `Is the above transaction required to be by deed?`,
  //   options: [
  //     { body: "Yes", isCorrect: true },
  //     { body: "No" },
  //     { body: "It depends on the agreement of the parties" },
  //     { body: "All of the above" },
  //   ],
  // },
  {
    id: 3,
    body: `One of the following is not among the taxes to be paid during the perfection of the titles to a property:`,
    options: [
      { body: "Consent fees" },
      { body: "Stamp duties" },
      { body: "Rent", isCorrect: true },
      { body: "Capital gains tax" },
    ],
  },
  // {
  //   id: 4,
  //   body: "The chargeable gain is the;",
  //   options: [
  //     {
  //       body: "Difference between the cost of the asset and the consideration received on its disposal",
  //       isCorrect: true,
  //     },
  //     { body: "The whole sum realized after the sale of the asset" },
  //     {
  //       body: "The Sum that the FIRS directs to the chargeable gain after inspecting the property",
  //     },
  //     {
  //       body: "It is a contribution therefore the vendor can choose the amount to pay",
  //     },
  //   ],
  // },
  {
    id: 5,
    body: "All but one of these is true of a power of attorney:",
    options: [
      { body: "It may be made by deed" },
      { body: "It is an instrument of transfer of title", isCorrect: true },
      { body: "It is an instrument of delegation" },
      { body: "It is a specie of a deed poll" },
    ],
  },
  // {
  //   id: 6,
  //   body: "In Revival and Republication of Will it may be done through – Sect 15 Wills Law Lagos State",
  //   options: [
  //     {
  //       body: "A duly executed codicil with intention to revive the revoked Will",
  //       isCorrect: true,
  //     },
  //     {
  //       body: "Taking instructions to draft Will",
  //     },
  //     {
  //       body: "Writing with a declaration to court of intention",
  //     },
  //     {
  //       body: "None of the above… ",
  //     },
  //   ],
  // },
  {
    id: 7,
    parentId: 2,
    body: "One of the following statements about the gift of the house to Omore is correct",
    options: [
      { body: "The gift will be valid if Omore survived her father" },
      {
        body: "The gift will be valid if Omore obtains an assent from the executors",
      },
      { body: "The gift is valid because Omore was closest to her father" },
      {
        body: "The gift is not valid on the ground of customary restriction on the rights of Ogene Johnson to make a will",
        isCorrect: true,
      },
    ],
  },
  {
    id: 8,
    body: "Where a child is a beneficiary in a will having a sole executor",
    options: [
      { body: "Allow the infant nominate a guardian" },
      { body: "Appoint an administrator to take over the estate" },
      { body: "Appoint a Guardian", isCorrect: true },
      { body: "The court shall not grant probate to the will" },
    ],
  },

  // {
  //   id: 9,
  //   body: "Below are examples of documents which constitute good root of title except one",
  //   options: [
  //     { body: "Certificate of title" },
  //     { body: "A deed of gift" },
  //     { body: "Equitable mortgage", isCorrect: true },
  //     { body: "Registered titles" },
  //   ],
  // },

  {
    id: 10,
    body: "A solicitor conducting search of a land needs not look at:",
    options: [
      { body: "The land registry" },
      { body: "The land itself" },
      { body: "The probate Registry" },
      { body: "None of the above", isCorrect: true },
    ],
  },

  {
    id: 11,
    body: "The order of perfection of a deed of assignment is one of the following",
    options: [
      {
        body: "Governor’s consent, Stamping and Registration",
        isCorrect: true,
      },
      { body: "Stamping, Registration and Governor’s Consent" },
      {
        body: "Registration, Stamping and Governor’s Consent",
      },
      { body: "Governor’s Consent, Registration and Stamping" },
    ],
  },
  {
    id: 12,
    parentId: 3,
    body: "As regards Mr. Rich-Boy’s property in PortHarcourt all of these Laws are relevant except:",
    options: [
      {
        body: "The Conveyancing Act",
      },
      { body: "The Land Use Act" },
      {
        body: "The Land Tenure Law",
        isCorrect: true,
      },
      { body: "The Statute of Fraud" },
    ],
  },

  // {
  //   id: 13,
  //   parentId: 3,
  //   body: "Which of the persons below is saddled with the responsibility of drafting the document required at the contract stage of the transaction",
  //   options: [
  //     {
  //       body: "Mr. Rich-Boy’s Solicitor",
  //       isCorrect: true,
  //     },
  //     { body: "Mrs. Rose’ Solicitor" },
  //     {
  //       body: "The two Solicitors acting together",
  //     },
  //     { body: "Registrar of deeds" },
  //   ],
  // },
  // {
  //   id: 14,
  //   parentId: 3,
  //   body: "One of the following does not apply after the contract stage:",
  //   options: [
  //     {
  //       body: "Mr. Rich-Boy’s death will not affect the contract",
  //     },
  //     {
  //       body: "Mr. Rose is automatically entitled to possession",
  //       isCorrect: true,
  //     },

  //     {
  //       body: "Mr. Rose acquires an equity in respect of the property",
  //     },
  //     {
  //       body: "Mr. Rich-Boy becomes a qualified trustee in respect of the property",
  //     },
  //   ],
  // },
  {
    id: 15,
    body: "Which of the following is not a feature of a deed?",
    options: [
      { body: "Stamping", isCorrect: true },
      { body: "Sealing" },
      { body: "Delivery" },
      { body: "Signing" },
    ],
  },
  {
    id: 16,
    body: "Under the property and conveyancing law 1959, in order to ascertain that title is good, the purchaser must insist that the title is deducted for at least",
    options: [
      { body: "40 years" },
      { body: "30 years", isCorrect: true },
      { body: "20 years" },
      { body: "15 years" },
    ],
  },
  {
    id: 17,
    body: "The legal age approved under the Wills Act for a testator to make a will is……",
    options: [
      { body: "18 years", isCorrect: true },
      { body: "16 years" },
      { body: "21 years" },
      { body: "17 years" },
    ],
  },
];

export { BaseQuestions, Questions };
