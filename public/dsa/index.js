if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDSA);
} else {
    initDSA();
}

function initDSA() {

    const syllabusData = window.syllabusData || [];

    // --- DOM Elements ---
    const menuToggleBtn = document.getElementById('menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const themeToggleBtn = document.getElementById('theme-toggle');
    const sidebarContent = document.getElementById('sidebar-content');
    const welcomeState = document.getElementById('welcome-state');
    const problemState = document.getElementById('problem-state');
    const problemTitleEl = document.getElementById('problem-title');
    const tabBtns = document.querySelectorAll('.tab-btn');
    const segmentPanes = document.querySelectorAll('.segment-pane');

    const ssGrid = document.getElementById('ss-grid');
    const codeBlock = document.getElementById('code-block');
    const funFactText = document.getElementById('funfact-text');

    // --- Theme Toggle ---
    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
    });

    let activeProblemId = null;
    let activeCodeLang = 'java';
    const codeLangBtns = document.querySelectorAll('.code-lang-btn');

    // --- Mobile Sidebar Toggle ---
    if (menuToggleBtn) {
        menuToggleBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent immediate closing
            sidebar.classList.toggle('show');
        });
    }

    // --- Close Sidebar on Click Outside (Mobile) ---
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 900) {
            if (sidebar.classList.contains('show') &&
                !sidebar.contains(e.target) &&
                !menuToggleBtn.contains(e.target)) {
                sidebar.classList.remove('show');
            }
        }
    });

    // --- Generate Sidebar Tree ---
    function generateSidebar() {
        sidebarContent.innerHTML = '';

        syllabusData.forEach((chapter, cIndex) => {
            const isLocked = cIndex > 0;

            const chapterWrapper = document.createElement('div');
            chapterWrapper.className = 'chapter-wrapper';

            const chapterNode = document.createElement('div');
            chapterNode.className = 'tree-node' + (isLocked ? ' locked-chapter' : '');
            chapterNode.innerHTML = `<i class="fa-solid fa-chevron-right"></i> ${chapter.chapterTitle} ${isLocked ? '<i class="fa-solid fa-lock" style="margin-left:6px;font-size:0.75rem;opacity:0.6;color:#f59e0b;"></i>' : ''}`;

            const chapterChildren = document.createElement('div');
            chapterChildren.className = 'tree-children';

            chapter.subchapters.forEach((subchapter) => {
                const subWrapper = document.createElement('div');
                subWrapper.className = 'subchapter-wrapper';

                const subNode = document.createElement('div');
                subNode.className = 'tree-node';
                subNode.innerHTML = `<i class="fa-solid fa-chevron-right"></i> ${subchapter.subTitle}`;

                const subChildren = document.createElement('div');
                subChildren.className = 'tree-children';

                subchapter.problems.forEach((problem) => {
                    const probNode = document.createElement('div');
                    probNode.className = 'problem-node' + (isLocked ? ' locked-problem' : '');
                    probNode.dataset.title = `${chapter.chapterTitle} - ${subchapter.subTitle} - ${problem.title}`;
                    probNode.dataset.id = problem.id;
                    probNode.dataset.locked = isLocked ? 'true' : 'false';

                    if (isLocked) {
                        probNode.innerHTML = `<i class="fa-solid fa-lock" style="font-size:0.65rem;margin-right:5px;opacity:0.5;color:#f59e0b;"></i>${problem.title}`;
                    } else {
                        probNode.innerText = problem.title;
                    }

                    probNode.addEventListener('click', () => {
                        if (isLocked) {
                            showLockedState(chapter.chapterTitle);
                        } else {
                            selectProblem(probNode);
                        }
                    });
                    subChildren.appendChild(probNode);
                });

                subNode.addEventListener('click', () => toggleTree(subNode));
                subWrapper.appendChild(subNode);
                subWrapper.appendChild(subChildren);
                chapterChildren.appendChild(subWrapper);
            });

            chapterNode.addEventListener('click', () => toggleTree(chapterNode));
            chapterWrapper.appendChild(chapterNode);
            chapterWrapper.appendChild(chapterChildren);
            sidebarContent.appendChild(chapterWrapper);
        });
    }

    // --- Locked Chapter State ---
    function showLockedState(chapterTitle) {
        document.querySelectorAll('.problem-node').forEach(n => n.classList.remove('active'));
        welcomeState.classList.add('hidden');
        problemState.classList.add('hidden');

        let lockedState = document.getElementById('locked-state');
        if (!lockedState) {
            lockedState = document.createElement('div');
            lockedState.id = 'locked-state';
            lockedState.style.cssText = 'display:flex;align-items:center;justify-content:center;height:100%;';
            lockedState.innerHTML = `
                <div class="glass-card welcome-card" style="text-align:center;max-width:480px;">
                    <div style="font-size:4rem;margin-bottom:1rem;">🔒</div>
                    <h2 style="color:var(--accent-primary);margin-bottom:0.5rem;" id="locked-chapter-name"></h2>
                    <p style="color:var(--text-secondary);margin-bottom:1.5rem;line-height:1.7;">
                        Videos for this chapter are being prepared by Senpai.<br>
                        Enroll in <strong style="color:var(--text-primary);">Chapter 1</strong> first — master the basics, then this chapter unlocks automatically.
                    </p>
                    <div style="background:rgba(245,158,11,0.1);border:1px solid rgba(245,158,11,0.3);border-radius:10px;padding:1rem;font-size:0.85rem;color:#f59e0b;">
                        ⚡ Chapter 1 videos dropping soon — stay tuned!
                    </div>
                </div>`;
            document.querySelector('.content-area').appendChild(lockedState);
        }

        document.getElementById('locked-chapter-name').innerText = chapterTitle;
        lockedState.style.display = 'flex';

        if (window.innerWidth <= 900) {
            sidebar.classList.remove('show');
        }
    }

    // --- Toggle Tree collapse/expand ---
    function toggleTree(node) {
        node.classList.toggle('expanded');
    }

    // --- Problem Selection ---
    function selectProblem(clickedNode) {
        document.querySelectorAll('.problem-node').forEach(n => n.classList.remove('active'));
        clickedNode.classList.add('active');

        // Hide locked state if visible
        const lockedState = document.getElementById('locked-state');
        if (lockedState) lockedState.style.display = 'none';

        welcomeState.classList.add('hidden');
        problemState.classList.remove('hidden');

        // Update Title
        const title = clickedNode.dataset.title;
        problemTitleEl.innerText = title;

        // Populate mock data for the selected problem
        updateProblemData(clickedNode.dataset.id);

        // Reset tabs to first (Explanation)
        switchTab('explanation');

        // Close sidebar on mobile
        if (window.innerWidth <= 900) {
            sidebar.classList.remove('show');
        }
    }

    // --- Tab Switching mechanism ---
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.dataset.tab;
            switchTab(targetTab);
        });
    });

    function switchTab(tabId) {
        // Active button
        tabBtns.forEach(b => b.classList.remove('active'));
        const activeBtn = document.querySelector(`.tab-btn[data-tab="${tabId}"]`);
        if (activeBtn) activeBtn.classList.add('active');

        // Active segment
        segmentPanes.forEach(pane => pane.classList.remove('active'));
        const activePane = document.getElementById(`pane-${tabId}`);
        if (activePane) activePane.classList.add('active');
    }

    // --- Code Language Switching ---
    codeLangBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            codeLangBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeCodeLang = btn.dataset.lang;
            if (activeProblemId) {
                const probDetails = window.problemsData ? window.problemsData[activeProblemId] : null;
                renderCodeSnippet(activeProblemId, probDetails);
            }
        });
    });

    function renderCodeSnippet(probId, probDetails) {
        const codeContentBox = document.getElementById('code-content');
        const codeFallbackBox = document.getElementById('code-fallback');

        // Check if probDetails exists and has AT LEAST one code defined
        const hasCode = probDetails && (probDetails.java || probDetails.cpp || probDetails.python || probDetails.js);

        if (!hasCode) {
            codeContentBox.classList.add('hidden');
            codeFallbackBox.classList.remove('hidden');
            return;
        } else {
            codeContentBox.classList.remove('hidden');
            codeFallbackBox.classList.add('hidden');
        }

        const snippets = {
            java: probDetails.java || "// Java solution is cooking",
            cpp: probDetails.cpp || "// C++ solution is cooking",
            python: probDetails.python || "# Python solution is cooking",
            js: probDetails.js || "// JS solution is cooking"
        };
        codeBlock.innerText = snippets[activeCodeLang];
        codeBlock.className = `language-${activeCodeLang}`;
    }

    // --- Mock Data Updater ---
    function updateProblemData(probId) {
        // Based on the ID, find the current problem
        let currentProblem = null;
        syllabusData.forEach(chapter => {
            chapter.subchapters.forEach(sub => {
                const found = sub.problems.find(p => p.id === probId);
                if (found) currentProblem = found;
            });
        });

        // 1. Get problem specific details from problems.js
        const probDetails = window.problemsData ? window.problemsData[probId] : null;

        // Random Difficulty Badge Logic
        const diffBadge = document.querySelector('.difficulty-badge');
        if (diffBadge) {
            const diffs = [
                { text: 'Easy', col: '#4ade80', bg: 'rgba(74, 222, 128, 0.2)', border: 'rgba(74, 222, 128, 0.4)' },
                { text: 'Medium', col: '#eab308', bg: 'rgba(234, 179, 8, 0.2)', border: 'rgba(234, 179, 8, 0.4)' },
                { text: 'Hard', col: '#ef4444', bg: 'rgba(239, 68, 68, 0.2)', border: 'rgba(239, 68, 68, 0.4)' }
            ];
            const randomDiff = diffs[Math.floor(Math.random() * diffs.length)];
            diffBadge.innerText = randomDiff.text;
            diffBadge.style.color = randomDiff.col;
            diffBadge.style.backgroundColor = randomDiff.bg;
            diffBadge.style.borderColor = randomDiff.border;
        }

        // 2. Code 
        activeProblemId = probId;
        renderCodeSnippet(probId, probDetails);

        // 3. Explanation
        const explanationContentBox = document.getElementById('explanation-content');
        const explanationFallbackBox = document.getElementById('explanation-fallback');
        const explanationEl = document.querySelector('#explanation-text');
        const explanationDetailsList = document.querySelector('#explanation-details');

        if (probDetails && probDetails.explanation) {
            explanationContentBox.classList.remove('hidden');
            explanationFallbackBox.classList.add('hidden');
            explanationEl.innerText = probDetails.explanation;
            
            // Render problem image if exists
            const problemImageEl = document.getElementById('problem-image');
            if (problemImageEl) {
                if (probDetails.problemImage) {
                    problemImageEl.src = probDetails.problemImage;
                    problemImageEl.style.display = 'block';
                } else {
                    problemImageEl.style.display = 'none';
                    problemImageEl.src = '';
                }
            }

            // Render dynamic list if provided, else clear it
            if (probDetails.explanationList && probDetails.explanationList.length > 0) {
                let listHtml = "";
                probDetails.explanationList.forEach(item => {
                    listHtml += `<li>${item}</li>`;
                });
                explanationDetailsList.innerHTML = listHtml;
                explanationDetailsList.style.display = 'block';
            } else {
                explanationDetailsList.innerHTML = "";
                explanationDetailsList.style.display = 'none';
            }

            // Render LeetCode IO / Constraints styles
            const leetcodeDetails = document.getElementById('leetcode-details');
            const ioContent = document.getElementById('io-content');
            const constraintsList = document.getElementById('constraints-list');
            const constraintsSection = document.querySelector('.constraints-section');

            if ((probDetails.io && probDetails.io.length > 0) || (probDetails.constraints && probDetails.constraints.length > 0)) {
                leetcodeDetails.classList.remove('hidden');

                if (probDetails.io && probDetails.io.length > 0) {
                    ioContent.parentElement.style.display = 'block';
                    let ioHtml = "";
                    probDetails.io.forEach(ioObj => {
                        ioHtml += `<p><strong>Input:</strong> ${ioObj.input}</p>`;
                        ioHtml += `<pre class="pattern-output">${ioObj.output}</pre>`;
                        if (ioObj.explanation) {
                            ioHtml += `<p style="margin-top:0.4rem"><strong>Explanation:</strong> ${ioObj.explanation}</p>`;
                        }
                        ioHtml += `<br>`;
                    });
                    ioContent.innerHTML = ioHtml;
                } else {
                    ioContent.parentElement.style.display = 'none';
                }

                if (probDetails.constraints && probDetails.constraints.length > 0) {
                    constraintsSection.style.display = 'block';
                    let constrainsHtml = "";
                    probDetails.constraints.forEach(c => {
                        constrainsHtml += `<li>${c}</li>`;
                    });
                    constraintsList.innerHTML = constrainsHtml;
                } else {
                    constraintsSection.style.display = 'none';
                }

            } else {
                leetcodeDetails.classList.add('hidden');
            }

        } else {
            explanationContentBox.classList.add('hidden');
            explanationFallbackBox.classList.remove('hidden');
            if (window.resetRPS) window.resetRPS();
        }

        // 4. Screenshots
        const ssContentBox = document.getElementById('ss-content');
        const ssFallbackBox = document.getElementById('ss-fallback');

        if (probDetails && probDetails.screenshots && probDetails.screenshots.length > 0) {
            ssContentBox.classList.remove('hidden');
            ssFallbackBox.classList.add('hidden');
            let ssHtml = "";
            probDetails.screenshots.forEach((img, idx) => {
                ssHtml += `<img src="${img}" class="ss-img" alt="Screenshot ${idx + 1}" onerror="this.src='https://via.placeholder.com/300x200?text=Missing+SS'">\n`;
            });
            ssGrid.innerHTML = ssHtml;
        } else {
            ssContentBox.classList.add('hidden');
            ssFallbackBox.classList.remove('hidden');
            ssGrid.innerHTML = '';
        }

        // 5. YouTube Video (Dynamic from syllabusData)
        const videoFrame = document.getElementById('video-frame');
        const videoContent = document.getElementById('video-content');
        const videoPlaceholder = document.getElementById('video-placeholder');

        const videoId = (probDetails && probDetails.youtubeId) || (currentProblem && currentProblem.youtubeId);

        if (videoId) {
            videoContent.classList.remove('hidden');
            videoPlaceholder.classList.add('hidden');
            videoFrame.src = `https://www.youtube.com/embed/${videoId}`;
        } else {
            videoContent.classList.add('hidden');
            videoPlaceholder.classList.remove('hidden');
            videoFrame.src = ""; // Stop playing previous video
        }

        // 6. Fun fact
        if (probDetails && probDetails.funFact) {
            funFactText.innerText = probDetails.funFact;
        } else {
            const facts = [
                "This problem was asked by FAANG companies 42 times last year. W.",
                "If you solve this, your aura points increase by 1000.",
                "Big O notation means worst case scenario, literally manifesting bad vibes to prepare.",
                "Dynamic Programming is just recursion with a cache memory. No cap."
            ];
            funFactText.innerText = facts[Math.floor(Math.random() * facts.length)];
        }

        // 7. Homework
        const homeworkContentBox = document.getElementById('homework-content');
        const homeworkFallbackBox = document.getElementById('homework-fallback');
        const homeworkTextEl = document.querySelector('#homework-content p');

        if (probDetails && probDetails.homework) {
            homeworkContentBox.classList.remove('hidden');
            homeworkFallbackBox.classList.add('hidden');
            homeworkTextEl.innerText = probDetails.homework;
        } else {
            homeworkContentBox.classList.add('hidden');
            homeworkFallbackBox.classList.remove('hidden');
            if (window.resetGym) window.resetGym();
        }
    }

    // Initialize
    generateSidebar();

    // --- Floating Feathers Effect ---
    const userAvatar = document.querySelector('.user-avatar');
    if (userAvatar) {
        userAvatar.addEventListener('click', () => {
            // Create a burst of feathers like antigravity UI
            for (let i = 0; i < 15; i++) {
                setTimeout(createFeather, i * 80);
            }
        });
    }

    function createFeather() {
        const feather = document.createElement('div');
        feather.innerHTML = '🦚';
        feather.className = 'floating-feather';

        // Random positions and dynamics
        feather.style.left = (Math.random() * 100) + 'vw';
        const duration = (Math.random() * 3 + 3); // 3 to 6 seconds
        feather.style.animation = `floatUp ${duration}s ease-in forwards`;
        feather.style.fontSize = (Math.random() * 1.5 + 1.5) + 'rem';

        document.body.appendChild(feather);

        // Cleanup after animation
        setTimeout(() => {
            feather.remove();
        }, duration * 1000);
    }

    // --- Rock Paper Scissors Logic ---
    const rpsEmojis = { 'rock': '✊', 'paper': '✋', 'scissors': '✌️' };
    const rpsOptions = ['rock', 'paper', 'scissors'];

    let rpsState = {
        playerScore: 0,
        compScore: 0
    };

    window.playRPS = function (playerChoice) {
        const compChoice = rpsOptions[Math.floor(Math.random() * 3)];

        const msgEl = document.getElementById('rps-message');
        const pScoreEl = document.getElementById('rps-player-score');
        const cScoreEl = document.getElementById('rps-comp-score');
        const pHand = document.getElementById('rps-player-hand');
        const cHand = document.getElementById('rps-comp-hand');
        const restartBtn = document.getElementById('rps-restart');

        document.getElementById('rps-game-area').style.transform = 'scale(0.98)';
        setTimeout(() => document.getElementById('rps-game-area').style.transform = 'scale(1)', 100);

        pHand.innerText = rpsEmojis[playerChoice];
        cHand.innerText = rpsEmojis[compChoice];

        if (playerChoice === compChoice) {
            msgEl.innerHTML = `<span style="color:var(--text-secondary);">It's a Tie! 🤝</span>`;
        } else if (
            (playerChoice === 'rock' && compChoice === 'scissors') ||
            (playerChoice === 'paper' && compChoice === 'rock') ||
            (playerChoice === 'scissors' && compChoice === 'paper')
        ) {
            rpsState.playerScore++;
            pScoreEl.innerText = rpsState.playerScore;
            msgEl.innerHTML = `<span style="color:#4ade80;">You win this round! 🎉</span>`;
        } else {
            rpsState.compScore++;
            cScoreEl.innerText = rpsState.compScore;
            msgEl.innerHTML = `<span style="color:#ef4444;">You folded! 🤖</span>`;
        }

        if (rpsState.playerScore > 0 || rpsState.compScore > 0) {
            restartBtn.classList.remove('hidden');
        }
    };

    window.resetRPS = function () {
        rpsState = { playerScore: 0, compScore: 0 };
        const pScoreEl = document.getElementById('rps-player-score');
        const cScoreEl = document.getElementById('rps-comp-score');
        const msgEl = document.getElementById('rps-message');
        const restartBtn = document.getElementById('rps-restart');
        const pHand = document.getElementById('rps-player-hand');
        const cHand = document.getElementById('rps-comp-hand');

        if (pScoreEl) pScoreEl.innerText = '0';
        if (cScoreEl) cScoreEl.innerText = '0';
        if (msgEl) msgEl.innerText = 'Choose your weapon!';
        if (restartBtn) restartBtn.classList.add('hidden');
        if (pHand) pHand.innerText = '🤜';
        if (cHand) cHand.innerText = '🤛';
    };

    // --- Interactive Gym Fallback ---
    let gymReps = 0;
    const gymEmoji = document.getElementById('gym-emoji');
    const gymRepsEl = document.getElementById('gym-reps');

    window.liftWeight = function () {
        gymReps++;
        if (gymRepsEl) gymRepsEl.innerText = gymReps;

        const emojiEl = document.getElementById('gym-emoji');
        if (emojiEl) {
            emojiEl.style.transform = 'translateY(-25px)';
            setTimeout(() => {
                emojiEl.style.transform = 'translateY(0)';
            }, 100);

            if (gymReps >= 15 && gymReps < 30) {
                emojiEl.innerText = '💪😎';
            } else if (gymReps >= 30 && gymReps < 50) {
                emojiEl.innerText = '🔥🦍';
            } else if (gymReps >= 50) {
                emojiEl.innerText = '🏆👑';
            }
        }
    };

    window.resetGym = function () {
        gymReps = 0;
        if (gymRepsEl) gymRepsEl.innerText = '0';
        const emojiEl = document.getElementById('gym-emoji');
        if (emojiEl) emojiEl.innerText = '🏋️‍♂️';
    };
}
