# AI Foundations — Lesson 12 blueprint (unpublished)

Status: **planning only**. Do not add a route, publish lesson metadata, or change Supabase progress identifiers until the lesson is implemented and verified. Existing Lessons 1–11 must remain unchanged.

## Predecessor acceptance (Lesson 11)
- User reported that the four-question assessment saved successfully and the saved score was restored after reopening the account.
- User reported that changing the nearest-neighbor k value updated both the graph and displayed accuracy.
- User reported a green GitHub Actions run for commit b3b1670; Vercel status checks for that commit reported success.
- These are user-reported live checks, not an independent automated browser test. Do not infer that all devices, accounts, or Supabase migrations were independently verified.

## Lesson 12 — Cross-validation and data leakage

**Essential question:** How can we choose a machine-learning model without using the final test data to tune it?

**Prerequisites:** Lessons 8–11 (scaling, nearest neighbors, evaluation, generalization).

**Learning outcomes**
1. Distinguish training, validation, and final test sets and identify data leakage.
2. Calculate a mean validation score across folds, with a worked numerical example.
3. Explain why StandardScaler must be fit inside each training fold using a Pipeline.
4. Select a k value using stratified cross-validation on the training partition, then evaluate the chosen pipeline exactly once on the held-out test partition.
5. Connect the same evaluation principle to robot sensor calibration across different rooms or conditions, without claiming physical hardware was tested.

## Mathematical worked example
For five validation folds with accuracy scores 0.90, 0.85, 0.95, 0.90, and 0.80:

Mean accuracy = (0.90 + 0.85 + 0.95 + 0.90 + 0.80) / 5 = 0.88.

This mean summarizes validation performance; it is not a guarantee of future performance or an untouched test score. Discuss variation between folds and the difference between model selection and final evaluation.

## Python-first lab (run externally; no browser runtime promised)

```python
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split, StratifiedKFold, cross_val_score
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.neighbors import KNeighborsClassifier

iris = load_iris()
X = iris.data[:, [0, 2]]  # sepal length and petal length
y = iris.target
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)
cv = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)
scores_by_k = {}
for k in (1, 3, 5, 9, 15):
    model = make_pipeline(StandardScaler(), KNeighborsClassifier(n_neighbors=k))
    scores_by_k[k] = cross_val_score(
        model, X_train, y_train, cv=cv, scoring="accuracy"
    ).mean()
best_k = max(scores_by_k, key=scores_by_k.get)
final_model = make_pipeline(StandardScaler(), KNeighborsClassifier(n_neighbors=best_k))
final_model.fit(X_train, y_train)
print("Selected k:", best_k)
print("Held-out test accuracy:", round(final_model.score(X_test, y_test), 3))
```

Expected outcome: prints one selected k from the candidate set and a held-out test accuracy between 0 and 1. Exact numbers must be executed and checked before publishing; do not invent them. Challenge: explain why scaling all 150 rows before cross-validation leaks information.

## Interactive visualization
A five-fold train/validation diagram: selecting a fold highlights its validation rows and remaining training rows. A separate, visually distinct held-out test partition must never appear in a validation fold. Include keyboard-operable controls and textual explanations.

## Luminery guidance (authored prompts, not live AI)
- Ask: Why might tuning k repeatedly against the test set make the reported accuracy misleading?
- Hint 1: Identify which data influences model selection.
- Hint 2: Consider what happens if the same examples inform both choices and the final claim.
- Reflection: What evidence would you need before deploying a classifier for real robot sensor readings?

## Assessment and evidence
Four keyed questions with per-question feedback: fold mean arithmetic, leakage identification, scaler placement, and test-set role. Require all answers before checking; require checking before account save. Preserve the same unique-ID and RLS-backed progress contract as earlier lessons, subject to migration verification.

## Publication gates
- Implement lesson page, route, metadata and source guards together; do not publish a broken link.
- Verify `npm run check:ai-pathway` and `npm run build` in CI.
- Confirm any necessary Supabase identifier constraint migration is applied before testing account saves.
- Verify on production: keyboard/mobile fold interaction, quiz feedback, checked-before-save, save, refresh, sign-out/sign-in restoration.
- Do not issue certificates or claim executable in-browser Python.
