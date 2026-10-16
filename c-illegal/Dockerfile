FROM onkernel/nodejs22-base:0.1.3
ENV ENTRYPOINT_RELPATH="index.ts"
COPY . /boot-node/app/
RUN /boot-node/setup.sh
RUN KERNEL_API_KEY=build KERNEL_BASE_URL=http://localhost KERNEL_MODE=deploy /boot-node/entrypoint.sh
