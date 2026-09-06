export interface BlogPost {
  slug: string;
  title: string;
  summary: string;
  date: string;
  readTime: string;
  tags: string[];
  content: {
    heading: string;
    body: string[];
    code?: { language: string; snippet: string };
  }[];
}

export const blogData: Record<string, BlogPost> = {
  "solidity-smart-contract-security": {
    slug: "solidity-smart-contract-security",
    title: "Securing EVM Smart Contracts: Defending Against Reentrancy and State Pitfalls",
    summary: "A practical deep dive into smart contract defensive programming, the Checks-Effects-Interactions (CEI) pattern, and storage layout optimization.",
    date: "2025-08-14",
    readTime: "5 min read",
    tags: ["Solidity", "Security", "Web3", "Ethereum"],
    content: [
      {
        heading: "1. The Anatomy of Reentrancy",
        body: [
          "Reentrancy remains one of the most destructive attack vectors in EVM smart contract history. It occurs when an external contract call hands control back to an untrusted recipient before the calling contract updates its internal state balances.",
          "When the malicious contract receives control (via fallback or receive functions), it recursively calls the original contract's withdrawal function, draining funds repeatedly."
        ],
        code: {
          language: "solidity",
          snippet: `// INSECURE PATTERN: Interacting before updating state
function withdraw(uint256 amount) external {
    require(balances[msg.sender] >= amount, "Insufficient");
    (bool sent, ) = msg.sender.call{value: amount}(""); // Vulnerability here!
    require(sent, "Transfer failed");
    balances[msg.sender] -= amount;
}`
        }
      },
      {
        heading: "2. The Checks-Effects-Interactions (CEI) Standard",
        body: [
          "The foundational defense against reentrancy is the Checks-Effects-Interactions pattern. Always perform all authorization checks first, update internal state variables second, and only then make external calls to external addresses or contracts."
        ],
        code: {
          language: "solidity",
          snippet: `// SECURE PATTERN: Checks-Effects-Interactions (CEI)
function withdrawSecure(uint256 amount) external nonReentrant {
    // 1. CHECKS
    require(balances[msg.sender] >= amount, "Insufficient balance");

    // 2. EFFECTS (Update state before external transfer)
    balances[msg.sender] -= amount;

    // 3. INTERACTIONS
    (bool sent, ) = msg.sender.call{value: amount}("");
    require(sent, "Transfer failed");
}`
        }
      },
      {
        heading: "3. Storage Layout & Gas Profiling",
        body: [
          "Every 32-byte storage slot in the EVM costs significant gas to read (SLOAD) and write (SSTORE). By packing related uint128, uint64, or boolean variables into consecutive positions within a struct, multiple state mutations can be committed within a single storage write slot.",
          "Combining defensive modifiers like OpenZeppelin's ReentrancyGuard with optimized storage layout guarantees both ironclad security and competitive gas efficiency for protocol users."
        ]
      }
    ]
  },
  "algorithmic-trading-risk-management": {
    slug: "algorithmic-trading-risk-management",
    title: "Algorithmic Risk Management: The Math Behind Capital Preservation",
    summary: "How quantitative risk rules, dynamic position sizing, and volatility-adjusted stops prevent ruin in algorithmic execution engines.",
    date: "2025-07-22",
    readTime: "6 min read",
    tags: ["Trading", "Quantitative", "Python", "Risk Management"],
    content: [
      {
        heading: "1. The Fallacy of Win Rate",
        body: [
          "Novice traders fixate on high win-rate strategies (e.g. 80%+), often through hidden martingale scaling or catastrophic fat-tail risk. In algorithmic systems, the most profitable and durable strategies typically operate with win rates between 40% and 55%, sustained entirely by asymmetric Risk-to-Reward (R:R) multiples.",
          "A strategy with a 45% win rate that averages 2.5R on winning trades and cuts losers at 1.0R delivers consistent positive mathematical expectation over hundreds of executions."
        ]
      },
      {
        heading: "2. Mathematical Expectancy Formula",
        body: [
          "The engine's long-term viability is calculated via Expected Value per trade: EV = (Win Rate × Average Win) - (Loss Rate × Average Loss).",
          "If the expected value is positive, scaling the position size relative to account equity using fractional Kelly criterion or fixed fractional percentage risk (e.g. 1% to 2% max portfolio loss per position) protects the account from drawdowns exceeding mathematical recovery thresholds."
        ],
        code: {
          language: "python",
          snippet: `def calculate_position_size(account_equity: float, risk_pct: float, entry_price: float, stop_loss: float) -> float:
    """Calculates exact lot/unit sizing based on strict dollar risk budget."""
    risk_dollars = account_equity * (risk_pct / 100.0)
    per_unit_risk = abs(entry_price - stop_loss)
    if per_unit_risk <= 0:
        raise ValueError("Stop loss cannot equal entry price.")
    units = risk_dollars / per_unit_risk
    return units`
        }
      },
      {
        heading: "3. Volatility-Adjusted Stops (ATR Modeling)",
        body: [
          "Fixed tick or fixed percentage stops fail when market volatility regimes shift. In high volatility regimes, a static 1% stop triggers on market noise; in low volatility regimes, it leaves too much capital exposed.",
          "Employing the Average True Range (ATR) with dynamic multipliers dynamically expands or contracts stop distances according to real-time market dispersion."
        ]
      }
    ]
  },
  "flutter-biometric-face-recognition": {
    slug: "flutter-biometric-face-recognition",
    title: "On-Device Biometric Verification in Flutter: High Accuracy at 60 FPS",
    summary: "Engineering lessons from building Absensi RSD: running TensorFlow Lite facial embeddings on background isolates without freezing UI threads.",
    date: "2025-05-19",
    readTime: "5 min read",
    tags: ["Flutter", "Machine Learning", "Mobile", "Dart"],
    content: [
      {
        heading: "1. The Mobile Biometric Bottleneck",
        body: [
          "When building enterprise mobile attendance applications, face recognition must occur in real time so users immediately see visual feedback when their face is positioned correctly inside the camera viewfinder.",
          "However, executing deep convolutional neural network inference on continuous 30 FPS camera frames will immediately saturate the single Dart UI thread, resulting in severe frame drops and janky animations."
        ]
      },
      {
        heading: "2. Offloading Inference to Dart Isolates",
        body: [
          "The solution is architecting an asynchronous producer-consumer pipeline. The camera preview runs unhindered on the main thread, while downsampled YUV/RGB byte buffers are transmitted via SendPort to a long-lived Dart Isolate.",
          "The isolate runs the TensorFlow Lite quantized model, computes the 128-dimensional facial embedding vector, and sends back lightweight coordinate bounding boxes and identity match confidence scores."
        ],
        code: {
          language: "dart",
          snippet: `// Passing image buffer to isolate without blocking UI
Future<void> runInferenceInIsolate(CameraImage image) async {
  if (_isProcessing) return; // Drop frame if previous inference still running
  _isProcessing = true;
  
  final responsePort = ReceivePort();
  _isolateSendPort.send(InferenceMessage(
    planes: image.planes.map((p) => p.bytes).toList(),
    width: image.width,
    height: image.height,
    sendPort: responsePort.sendPort,
  ));
  
  final result = await responsePort.first as RecognitionResult;
  _isProcessing = false;
  updateBoundingBoxes(result);
}`
        }
      },
      {
        heading: "3. Anti-Spoofing & Geofencing Integrity",
        body: [
          "A biometric face attendance system is only as secure as its physical location verification. To prevent mock-location spoofing, client payloads are cryptographically signed with on-device hardware keystore tokens before transmission to the backend validation server."
        ]
      }
    ]
  }
};
