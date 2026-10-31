// Public lesson metadata mirrored from Prasm-content (tip e645998).
// Only phil-01 and sol-01 are seeded with questions; the rest are skeletons ("coming soon").
export type Question = { id: string; prompt: string; choices: string[]; answerIndex: number; explain: string };
export type Lesson = { id: string; title: string; tip: string; questions: Question[] };
export type Path = { id: string; title: string; blurb: string; tier: 'free' | 'paid'; icon: string; color: string; ledge: string; lessons: Lesson[] };

const soon = (id: string, title: string, tip: string): Lesson => ({ id, title, tip, questions: [] });

export const PATHS: Path[] = [
  {
    id: 'philosophy', title: 'Philosophy and cypherpunk basics', blurb: 'Why privacy and open code matter.', tier: 'free', icon: '🕶️', color: '#9945FF', ledge: '#6B2FB8',
    lessons: [
      {
        id: 'phil-01', title: 'What cypherpunk means',
        tip: 'Cypherpunks use cryptography to protect privacy and individual agency.',
        questions: [
          { id: 'phil-01-q1', prompt: 'Cypherpunk culture prioritizes which idea?', choices: ['Maximum trading volume', 'Privacy and individual cryptography', 'Central bank partnerships', 'Closed-source wallets only'], answerIndex: 1, explain: 'Cypherpunk writing centers privacy, cryptography, and individual agency, not trading noise.' },
          { id: 'phil-01-q2', prompt: 'Which tool do cypherpunks rely on to protect privacy?', choices: ['Public social media posts', 'Cryptography', 'Bigger passwords written on paper', 'Trusting a single company'], answerIndex: 1, explain: 'Cryptography lets individuals protect information without asking permission.' },
          { id: 'phil-01-q3', prompt: "'Cypherpunks write code' means\u2026", choices: ['Change comes from building open tools', 'Only lawyers can protect privacy', 'Code should stay secret', 'Writing code is for profit only'], answerIndex: 0, explain: 'The movement favors building and sharing working tools over waiting for permission.' },
        ],
      },
      soon('phil-02', "Don't trust, verify", 'Check things yourself instead of taking someone\u2019s word.'),
      soon('phil-03', 'Keys vs trust', 'Holding keys replaces trusting a middleman.'),
      soon('phil-04', 'Why learning beats hype', 'Understanding outlasts any trend.'),
    ],
  },
  {
    id: 'bitcoin-literacy', title: 'Money and Bitcoin literacy', blurb: 'What money is and how Bitcoin works.', tier: 'free', icon: '🪙', color: '#FF9600', ledge: '#CC7800',
    lessons: [
      soon('btc-01', 'What makes good money', 'Scarce, portable, divisible, hard to fake.'),
      soon('btc-02', 'The whitepaper in plain words', 'Nine pages that started it all.'),
      soon('btc-03', 'Coins as outputs (UTXO, high level)', 'Coins are chunks you spend whole.'),
      soon('btc-04', 'Why people run nodes', 'Your node checks the rules for you.'),
    ],
  },
  {
    id: 'privacy-opsec', title: 'Privacy and OpSec', blurb: 'Protect yourself and your keys.', tier: 'free', icon: '🛡️', color: '#1CB0F6', ledge: '#1899D6',
    lessons: [
      soon('priv-01', 'Your threat model', 'Know who you are protecting against.'),
      soon('priv-02', 'Seed phrase hygiene', 'Never type it, never share it.'),
      soon('priv-03', 'Spotting phishing', 'Urgency and too-good offers are red flags.'),
      soon('priv-04', 'Your data, your call', 'Share only what you choose.'),
    ],
  },
  {
    id: 'solana-fundamentals', title: 'Solana fundamentals', blurb: 'Accounts, keys, and Seed Vault.', tier: 'free', icon: '◎', color: '#14C88A', ledge: '#0BA866',
    lessons: [
      {
        id: 'sol-01', title: 'Accounts vs keys',
        tip: 'Your address is a public key; the matching private key never leaves your wallet.',
        questions: [
          { id: 'sol-01-q1', prompt: 'On Solana, a wallet address is best described as\u2026', choices: ['A password you type into every dApp', 'A public key used to identify an account', 'A private key safe to post publicly', 'A bank routing number'], answerIndex: 1, explain: 'Addresses are public keys. Private keys must stay offline or in Seed Vault.' },
          { id: 'sol-01-q2', prompt: 'Is it safe to share your wallet address?', choices: ['Yes, it is public by design', 'No, it lets anyone spend funds', 'Only with support staff', 'Only in private chats'], answerIndex: 0, explain: 'An address only identifies; it cannot authorize anything.' },
          { id: 'sol-01-q3', prompt: 'Who should ever see your private key or seed phrase?', choices: ['Wallet support', 'A lesson app', 'Nobody', 'Friends you trust'], answerIndex: 2, explain: 'Anyone with the seed controls the wallet. Never share it.' },
        ],
      },
      soon('sol-02', 'Seed Vault boundary', 'Keys stay in Seed Vault; apps only ask.'),
      soon('sol-03', 'Accounts and rent (high level)', 'Accounts hold data and a small deposit.'),
    ],
  },
  {
    id: 'seeker-safety', title: 'Mobile / Seeker safety', blurb: 'Use your phone wallet safely.', tier: 'paid', icon: '📱', color: '#CE82FF', ledge: '#A568CC',
    lessons: [
      soon('seek-01', 'Connect is not sign', 'Connecting shares an address, nothing more.'),
      soon('seek-02', 'Reading a wallet prompt', 'Read every prompt before you approve.'),
    ],
  },
  {
    id: 'onchain-reading', title: 'On-chain reading', blurb: 'Read explorers, read-only.', tier: 'paid', icon: '🔎', color: '#FF86D0', ledge: '#CC6BA6',
    lessons: [
      soon('read-01', 'Explorer fields 101', 'What each explorer field means.'),
      soon('read-02', 'Following a transaction (read-only)', 'Trace a transaction without touching it.'),
    ],
  },
];

export const isSeeded = (l: Lesson) => l.questions.length > 0;
export const ALL_LESSONS = PATHS.flatMap((p) => p.lessons.map((l) => ({ path: p, lesson: l })));
export const findLesson = (id: string) => ALL_LESSONS.find((x) => x.lesson.id === id);
// Default unlocked lessons: the two playable seeds.
export const DEFAULT_UNLOCKED = ['phil-01', 'sol-01'];
