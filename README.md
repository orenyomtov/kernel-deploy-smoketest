# kernel-deploy-smoketest

A minimal Kernel app used as a fixture to smoke-test the git-source deployment path.

It does nothing but expose a single `ping` action that returns `{ ok: true }`. There is no
application logic here and nothing to configure. It exists so that a deployment created from a
git source has a valid, public repository to point at.
